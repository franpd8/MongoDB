const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router()


router.post('/add', UserController.create)
router.get('/all', UserController.getAll)
router.get('/id/:_id', UserController.getById)
// router.get('/name/:_name', UserController.getByName)
router.delete('/delete/:_id', UserController.delete)
router.put('/update/:_id', UserController.update)

module.exports = router;