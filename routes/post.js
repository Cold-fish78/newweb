const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');
router.get('/aws-not-accepting-debit-credit-card',postController.blogpost);
router.get('/search',postController.search);
router.get('/razorpay-nodejs-integration',postController.blogpost2);

module.exports = router;