const express = require('express');
const PostController = require('../controllers/PostController');
const { authentication, isAdmin, isAuthorPost } = require('../middlewares/authentication');
const Post = require('../models/Post');
const router = express.Router()

router.post('/add',authentication,PostController.create)
router.get('/all', PostController.getAll)
router.get('/id/:_id',authentication, isAdmin,PostController.getById)
router.delete('/delete/:_id',authentication,isAdmin, PostController.delete)
router.put('/update/:_id',authentication,isAuthorPost,PostController.update)
router.get('/search/:search', PostController.getByName)
module.exports = router;