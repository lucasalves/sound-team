describe('Menu model', function(){
    var menu
      , name     = 'Main Menu'
      , itemName = 'Videos'
    ;

    beforeEach(function(){
        menu = new Menu(name);
    });

    it('Caso não existe o menu, o mesmo deve ser criado', function(){
        expect(menu.id).toBeDefined();
    });

    it('Altera o nome do menu atual', function(){
        var newName = 'Main Menu - 2';        
        menu.update({name: newName});        
        expect(menu.name).toEqual(newName);

        menu.update({name: name});
    });

    it('Retornar um array vazio ao pedir os itens do menu', function(){
        expect( menu.getItems() ).toEqual([]);
    });

    it('Insere um item no menu', function(){
        var item = {
                'name': itemName,
                'description': 'Visualize, busque e assista todos o videos disponíveis no sistema',
                'icon': 'film',
                'path': '/movie',
            };
        menu.addItem(item);
        expect( menu.getItems()[0].name ).toEqual(itemName);
    });

    it('Retornar o ultimo item de menu', function(){
       expect( menu.getLastItem().name ).toEqual(itemName);
    });

    it('Retornar um array com um item de menu', function(){
        expect( menu.getItems().length ).toEqual(1);
    });

    it('Retornar o item que contem o id de consulta', function(){
        var id = menu.getLastItem().id
          , name = menu.getLastItem().name
        ;
        expect( menu.getItem(id).name ).toEqual(name);
    });

    it('Altera o nome do item de menu', function(){
        var newName = 'Film'
          , id  = menu.getLastItem().id
        ;
        menu.updateItem(id, {'name': newName});
        expect(menu.getLastItem().name).toEqual(newName);
    });
});