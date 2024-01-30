const express = require('express');
const helloController = require('./controller');
const router = express.Router();

router.get('/', helloController.get);

module.exports = router;
