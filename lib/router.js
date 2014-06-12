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
  // Route for creating a new post
  this.route('postSubmit', {
    path: '/submit'
  });
  
});

Router.onBeforeAction('loading');


