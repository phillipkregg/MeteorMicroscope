Template.postSubmit.events({
  'submit form': function(e) {
    
    e.preventDefault();
    
     var post = {
       url: $(e.target).find('[name=title]').val(),
       title: $(e.target).find('[name=title]').val(),
       message: $(e.target).find('[name=message]').val()
     };
    
    // The insert function automatically returns the _id of the new post
    post._id = Posts.insert(post);
    Router.go('postPage', post);
    
  }
});