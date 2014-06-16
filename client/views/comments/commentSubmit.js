Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();
    console.log("here is the template")
    console.log(template);
    
    var body = $(e.target).find('textarea[name=body]');
    var comment = {
      body: body.val(),
      postId: template.data._id
    };
    
    Meteor.call('comment', comment, function(error, commentId) {
      if(error) {
        throwError(error.reason);
      } else {
        body.val('');
      }
    });
    
  }
  
})