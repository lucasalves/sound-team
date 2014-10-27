(function(LiverScreen, $){
  LiverScreen.Helper = function(selector){
    this.html = $(selector);

    this.addEventListener();
    this.load();
  };

  LiverScreen.Helper.prototype.addEventListener = function() {
    this.html.on('helper-page-loaded', $.proxy(this, 'display'));
    this.html.on('helper-page-stop', $.proxy(this, 'stop'));
  };

  LiverScreen.Helper.prototype.display = function(e, helper) {
    this.html.html(helper);
    this.timer();
  };

  LiverScreen.Helper.prototype.load = function() {
    Utils.Request.get({
      url: 'live-screen/helper', 
      trigger: {local: this.html, name: 'helper-page-loaded'}
    });
  };

  LiverScreen.Helper.prototype.timer = function() {
    this._timer = setInterval($.proxy(this, 'next'), 10000);
  };
  
  LiverScreen.Helper.prototype.next = function() {
    console.log('next');
    var helper = this.html.find('#helper-page ul')
      , next 
      ;

      next = helper.find('li:visible').next();
      next = next.length ? next : helper.find('li:first');
      
      helper.find('li:visible').fadeOut(300, function(){
        next.fadeIn(300);
      }).removeClass('show');
  };

  LiverScreen.Helper.prototype.stop = function() {
    clearInterval(this._timer);
  };
}(LiverScreen, jQuery));