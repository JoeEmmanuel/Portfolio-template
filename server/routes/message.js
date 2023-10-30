const express = require('express');
const router = express.Router();
const { homePage, sendFormData, } = require('../controller/messageController');

router.get('/', homePage);

router.post('/', sendFormData);


module.exports = router;