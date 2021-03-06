// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require nifty/js/bootstrap.min
//= require nifty/plugins/pace/pace.min
//= require initializer
//= require ./utils/Request
//= require ./utils/Utils
//= require live-screen/liver-screen
//= require emitter/emitter
//= require videojs/dist/video-js/video
//= require_tree .


$(document).on('ready page:load', function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//Exists element
jQuery.fn.exists = function(){ return $(this).length > 0; };