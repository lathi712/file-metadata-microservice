'use strict'

const multer = require('multer')
const router = require('express').Router()

const upload = multer({ dest: 'uploads/' })

router.get('/', (req, res) => {
  res.status(200).sendfile('public/index.html')
})

router.post('/file', upload.single('file'),  (req, res) => {
  res.json({ size: req.file.size })
})

module.exports = router