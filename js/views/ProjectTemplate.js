var app = app || {}

console.log("template is included")

app.ProjectTemplate = Backbone.View.extend({
  template: _.template,

  render: function () {
    console.log("PO-TAE-TO")
  }

})