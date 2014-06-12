Template.postSubmit.events({
  'submit form': function(e) {
    
    e.preventDefault();
    
     var post = {
       url: $(e.target).find('[name=url]').val(),
       title: $(e.target).find('[name=title]').val(),
       message: $(e.target).find('[name=message]').val()
     };
          
    Meteor.call('post', post, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      // The router uses the post _id - just generated - to know where to go
      Router.go('postPage', post);
    });
    
    
    
  }
});