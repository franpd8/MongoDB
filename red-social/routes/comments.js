const express = require('express');
const CommentController = require('../controllers/CommentController');
const { authentication, isAdmin, isAuthorPost } = require('../middlewares/authentication');
const Comment = require('../models/Comment');
const router = express.Router()

router.put('/add/:_id',authentication, CommentController.create)
router.get('/post/:_id', authentication, CommentController.getAll)
router.delete('/delete/:_id', authentication, CommentController.delete)

module.exports = router;