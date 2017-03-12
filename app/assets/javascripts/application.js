// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require websocket_rails/main

var dispatcher = new WebSocketRails('localhost:3000/websocket');
dispatcher.on_open = function(data) {
  console.log('Connection has been established: ', data);
  // You can trigger new server events inside this callback if you wish.
}
dispatcher.bind('connection_closed', function(data) {
  console.log('connection is closed');
});
dispatcher.bind('player_joined', function(data) {
  console.log('someone joined game');
  console.log(data);
});
var join_game = function(gameId, playerId) {
  console.log("gameid = " +gameId);
  console.log("playerId = " +playerId);
  dispatcher.trigger('join_game',{gameId: gameId, playerId: playerId});
}
