'use strict';

var Menu = function(menu){
       this.setCurrent( this.getOrCreate(menu) );
       this.setItems();
};

Menu.prototype.id    = undefined;
Menu.prototype.name  = undefined;
Menu.prototype.items = [];

Menu.prototype.getOrCreate = function(menu){
    if(!this.exists(menu)){
        this.create(menu);
    }
    return this.get(menu);
};

Menu.prototype.exists = function(menu){
    var row = DB.execute("SELECT count(*) as total FROM menu WHERE name = '" + menu + "'");

    while(row.isValidRow()){
        return row.fieldByName('total') > 0 ? true : false;
    }
};

Menu.prototype.get = function(name){
    var menu = {}
      , row  = DB.execute("SELECT * FROM menu WHERE name = '" + name + "'")
    ;

    while(row.isValidRow()){
        menu.id   = row.fieldByName('id');
        menu.name = row.fieldByName('name');

        row.next();
    }


    return menu;
};

Menu.prototype.setCurrent = function(menu){
    this.id   = menu.id;
    this.name = menu.name;
};

Menu.prototype.setItems = function(){
    var items = []
      , row   = DB.execute("SELECT * FROM menu_item WHERE menu_id = " + this.id)
    ;

    while(row.isValidRow()){
        items.push({
            id: row.fieldByName('id'),
            name: row.fieldByName('name'),
            description: row.fieldByName('description'),
            icon: row.fieldByName('icon'),
            path: row.fieldByName('path'),
            menu_id: row.fieldByName('menu_id'),
            component_id: row.fieldByName('component_id'),
        });

        row.next();
    }

    this.items = items;
};

Menu.prototype.getItem = function(id){
    for (var i = 0; i < this.items.length; i++) {
        if(this.items[i].id === id){
            return this.items[i];
        }
    }
    return {};
};

Menu.prototype.getLastItem = function(){
    return this.items.length > 0 ? this.items[this.items.length - 1] : {};
};

Menu.prototype.getItems = function(){
    return this.items;
}

Menu.prototype.create = function(name){
    var sql = "INSERT INTO menu (name) VALUES ('" + name + "')";
    DB.execute(sql);
};

Menu.prototype.update = function(attr){
    var set = ""
      , sql = "UPDATE menu SET "
    ;

    for(var column in attr){        
        set += column + " = " + (typeof(attr[column]) === "string" ? "'" + attr[column] + "'" : attr[column]);
        this[column] = attr[column];
    }

    sql += set;
    sql += " WHERE id = " + this.id;

    DB.execute(sql);
};

Menu.prototype.addItem = function(item){
    var keys   = []
      , values = []
      , sql = 'INSERT INTO menu_item '
    ;
    item.menu_id = this.id;

    for(var k in item){
        keys.push(k);
        values.push( (typeof(item[k]) === "string" ? "'" + item[k] + "'" : item[k]) );
    }

    sql += "(" + keys.join(', ') + ")";
    sql += " VALUES (" + values.join(', ')  + ")";
    DB.execute(sql);

    this.setItems();
}

Menu.prototype.updateItem = function(id, attr){
    var set = ""
      , sql = "UPDATE menu_item SET "
    ;

    for(var column in attr){        
        set += column + " = " + (typeof(attr[column]) === "string" ? "'" + attr[column] + "'" : attr[column]);
        this[column] = attr[column];
    }

    sql += set;
    sql += " WHERE id = " + id;
    DB.execute(sql);

    this.setItems();
};