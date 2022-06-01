const express = require('express');
const PostController = require('../controllers/PostController');
const { authentication } = require('../middlewares/authentication');
const Post = require('../models/Post');
const router = express.Router()


router.post('/add',authentication,PostController.create)
router.get('/all', PostController.getAll)
router.get('/id/:_id', PostController.getById)
router.delete('/delete/:_id', PostController.delete)
router.put('/update/:_id', PostController.update)
module.exports = router;