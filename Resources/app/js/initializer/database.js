var DB
  , Database = {
        connect: function(name){
            var dbName = name || this._databaseName()

            DB = Ti.Ti.Database.open(dbName);
            Schema.create();
            
            return DB;
        },

        reconnect: function(){
            return this.connect();
        }

        _databaseName: function(){
            return Ti.App.getName() + '_' + environment.ENV;
        },

        purge: function(){
            if(DB){
              Schema.drop();
            }
        }
    };