(function($){
  var Request = {
    get: function(options){
      var self = this;

      $.get(options.url, options.data, function(response){
        self.response(response, options.addEventListener, options.trigger);
      });
    },

    response: function(response, addEventListener, trigger){

      if(addEventListener){
        addEventListener(response);
      }

      if(trigger){
        $(trigger.local).trigger(trigger.name, response);
      }
    }
  };

  window.Request = Request;
}(jQuery));