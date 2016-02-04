var app = app || {}

$(document).ready(function () {
  console.log('ready')

  // app.projectviewmaker = new app.ProjectView()
  app.router = new app.AppRouter();
  Backbone.history.start();
});