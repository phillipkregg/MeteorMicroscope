Posts = new Meteor.Collection('posts');

Posts.allow({
  // The userId is always passed to the allow and deny methods
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
})