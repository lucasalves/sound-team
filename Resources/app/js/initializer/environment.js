var environment = {
        defaultsEnv: ['production', 'test', 'development'],
        
        ENV: '',
        
        _prevEnv: '',
        
        setEnv: function(env){
            if(this.defaultsEnv.indexOf(env) > -1){
                this._prevEnv = this.ENV;
                this.ENV = env;
            }
        },
        
        getPrevEnv: function(){
            return this._prevEnv;
        }


}; environment.setEnv('development');