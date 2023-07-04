const Comment = require("../models/Comment")

module.exports = {
  createComment: async (req, res) => {
    try {
      // using Post model to create the cloudinary structure which which each post that is being stored in the posts database MongoDB
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  }
}
