Template.postPage.helpers({
  comments: function() {
    console.log(this)
    return Comments.find({postId: this._id});
  }
});