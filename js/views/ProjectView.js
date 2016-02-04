
var app = app || {}

app.ProjectView = Backbone.View.extend({
  el: "#projectList",

  events: {
    'click a': 'displayProject'
  },

  displayProject: function (e) {
    e.preventDefault()
    console.log("YAMS")
    app.thisTemplate = new app.ProjectTemplate()
    app.thisTemplate.render()
  },

  render: function () {
    console.log('integrated')

  }

})