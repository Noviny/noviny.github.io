app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'aboutMe',
    'projects': 'projectsIndex',
    'project/:name': 'viewProject'
  },

  aboutMe: function () {

  },

  projectsIndex: function () {

  },

  viewProject: function (name) {

  }


})