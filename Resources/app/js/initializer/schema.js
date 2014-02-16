var Schema = {
        create: function(){
            this._run('create.sql');
        },

        drop: function(){
            this._run('drop.sql');  
        },

        _directory: 'app/schema/',

        _run: function(file){
            file = this._directory + file;
            
            var doc     = Ti.Filesystem.getFileStream(Ti.Filesystem.getResourcesDirectory(), file)
              , command = []
            ;

            doc.open(Ti.Filesystem.MODE_READ);
            sql = doc.read();
            
            command = sql.toString().split(/--/);
            for (var i = 0; i < command.length; i++) {
                DB.execute(command[i].replace(/\n/g, " "));
            };
             
            doc.close();
        }
};