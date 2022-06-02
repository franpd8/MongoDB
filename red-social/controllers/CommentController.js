const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

const CommentController = {
  async create(req, res) {
    try {
      const comment = await Comment.create({
        ...req.body,
        userId: req.user._id,
        postId: req.params._id,
      });
      await User.findByIdAndUpdate(req.user._id, {
        $push: { commentIds: comment._id },
      });
      await Post.findByIdAndUpdate(req.params._id, {
        $push: { comments: comment._id },
      });
      res
        .status(201)
        .send({ message: "Comentario añadido con éxito", comment });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send([{ message: "Ha habido un problema al crear el comentario" }]);
    }
  },
  async getAllByPost(req, res) {
    try {
      const comments = await Post.findOne(
        { id: req.params.id },
        { title: 1, body: 1 }
      )
        .populate({ path: "userId", select: { name: 1 } })
        .populate({
          path: "comments",
          select: { body: 1, postId: 1 },
          populate: { path: "userId", select: { name: 1 } },
        });

      res.send(comments);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al cargar los comentarios" });
    }
  },
  async getAllByUser(req, res) {
    try {
      const comments = await User.findById(req.params._id)
      .populate({
         path: "commentIds",
         select:{body:1,postId:1},
        populate:{path:"postId",select:{title:1}}
       });

      res.send(comments);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al cargar los comentarios" });
    }
  },
  async delete(req, res) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params._id);
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { commentIds: comment._id },
      });
      await Post.findByIdAndUpdate(req.params._id, {
        $pull: { comments: comment._id },
      });
      res
        .status(201)
        .send({ message: "Comentario eliminiado con éxito", comment });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al eliminar el post" });
    }
  },
  async update(req, res) {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params._id,
        req.body,
        {
          new: true,
        }
      );

      await User.findByIdAndUpdate(req.user._id, req.body, {
        new: true,
      });

      await Post.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });

      res.send({ message: "Comentario actualizado con éxito", comment });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al actualizar el comentario" });
    }
  },
};
module.exports = CommentController;
