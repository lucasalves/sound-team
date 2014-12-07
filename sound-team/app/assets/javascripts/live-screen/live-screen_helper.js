// (function(LiveScreen){
//   LiveScreen.Helper = function(selector){
//     this.html = $(selector);

//     this.addEventListener();
//     this.load();
//   };

//   LiveScreen.Helper.prototype.addEventListener = function() {
//     this.html.on('helper-page-loaded', $.proxy(this, 'display'));
//     this.html.on('helper-page-stop', $.proxy(this, 'stop'));
//   };

//   LiveScreen.Helper.prototype.display = function(e, helper) {
//     this.html.html(helper);
//     this.timer();
//   };

//   LiveScreen.Helper.prototype.load = function() {
//     Utils.Request.get({
//       url: 'live-screen/helper', 
//       trigger: {local: this.html, name: 'helper-page-loaded'}
//     });
//   };

//   LiveScreen.Helper.prototype.timer = function() {
//     this._timer = setInterval($.proxy(this, 'next'), 10000);
//   };
  
//   LiveScreen.Helper.prototype.next = function() {
//     var helper = this.html.find('#helper-page ul')
//       , next 
//       ;

//       next = helper.find('li:visible').next();
//       next = next.length ? next : helper.find('li:first');
      
//       helper.find('li:visible').fadeOut(300, function(){
//         next.fadeIn(300);
//       }).removeClass('show');
//   };

//   LiveScreen.Helper.prototype.stop = function() {
//     clearInterval(this._timer);
//   };
// }(LiveScreen));