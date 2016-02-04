var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'aboutMe',
    'projects': 'projectsIndex',
    'project/:name': 'viewProject'
  },

  aboutMe: function () {
    $('#projects-link').removeClass('active')
    $('#about-me-link').addClass('active')
    $('#content').html($('#aboutMeTemplate').html())
    console.log('main page here')
  },

  // aboutMe: function () {
  //   app.AboutMe.render()
  // }

  projectsIndex: function () {
    console.log('Projects Index')
    $('#projects-link').addClass('active')
    $('#about-me-link').removeClass('active')
    $('#content').html($('#projects-template').html())
    app.projectviewmaker = new app.ProjectView()
    app.projectviewmaker.render()
  },

  // ProjectsIndex: function () {
  //   app.ProjectsIndex.render()
  // }

});