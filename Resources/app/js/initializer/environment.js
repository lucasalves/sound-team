var environment = {
        defaultsEnv: ['production', 'test', 'development'],
        
        ENV: '',
        
        _prevEnv: '',
        
        setEnv: function(env){
            if(this.defaultsEnv.indexOf(env) > -1 && env !== this.ENV){
                this._prevEnv = this.ENV;
                this.ENV = env;

                this.execOnChange();
            }
        },
        
        getPrevEnv: function(){
            return this._prevEnv;
        },

        execOnChange: function () {
            Database.reconnect();
        }


}; environment.setEnv('development');