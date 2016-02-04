
var app = app || {}

var thing;

app.ProjectView = Backbone.View.extend({
  el: "#projectList",

  events: {
    'click a': 'displayProject'
  },

  displayProject: function (e) {
    e.preventDefault();
    console.log("YAMS");

    var project = $(e.currentTarget).attr('id');

    // var applyTemplateTo = 'app.projectData.' + project

    // console.log(applyTemplateTo)

    var template = _.template($('#project-template').html());
    var parent = e.currentTarget.parentNode;
    $renderedTemplate = $.parseHTML(template(app.projectData[project]));
    $(parent).append($renderedTemplate);
  },

  render: function () {
    console.log('integrated')

  }

})