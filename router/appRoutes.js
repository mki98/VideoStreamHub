const express = require('express')
const router = express.Router();
const upload = require('../controllers/uploadControl')
const viewsControl = require('../controllers/viewsControl')

router.get('',viewsControl.home)
router.post('/upload/',upload.single("file"),viewsControl.uploadFile)
router.get('/watch/:id',viewsControl.viewFile)



router.get('/file/:id',viewsControl.getFile)
module.exports =router