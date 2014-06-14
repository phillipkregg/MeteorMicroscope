Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});

Router.map(function() {
  // Main route
  this.route('postsList', {
    path: '/'
  });
  // Route for individual post page
  this.route('postPage', {
    path: '/posts/:_id',
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });
  // Edit existing post
  this.route('postEdit', {
    path: '/posts/:_id/edit',
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });
  // Route for creating a new post
  this.route('postSubmit', {
    path: '/submit'
  });
  
});


var requireLogin = function(pause) {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }    
    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(function() { clearErrors(); });


