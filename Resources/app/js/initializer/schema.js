var Schema = {
        create: function(){
            this._run('create.sql');
        },

        drop: function(){
            this._run('drop.sql');  
        },

        _run: function(file){
            var fileSql = Ti.Filesystem.getFile( Ti.Filesystem.getApplicationDataDirectory(), file)
              , Stream = Ti.Filesystem.Filestream.getFileStream(fileSql);

            Stream.open(Ti.Filesystem.MODE_WRITE);
            sql = Stream.read();            
            DB.execute(sql);
            Stream.close();
        }
};