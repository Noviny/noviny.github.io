var app = app || {}

$(document).ready(function () {
  console.log('ready')

  app.router = new app.AppRouter();
  Backbone.history.start();
});