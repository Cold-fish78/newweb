const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loded');
router.get('/',homeController.home);
router.use('/user',require('./user'));
router.use('/post',require('./post'));
router.use('/sitemap',function(req,res){
    res.send(
        '<?xml version="1.0" encoding="UTF-8"?>
        <urlset
              xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
        
        
        <url>
          <loc>https://nerdwhocodes.com/</loc>
          <lastmod>2022-02-28T07:23:14+00:00</lastmod>
          <priority>1.00</priority>
        </url>
        <url>
          <loc>https://nerdwhocodes.com/post/aws-not-accepting-debit-credit-card</loc>
          <lastmod>2022-02-28T07:23:14+00:00</lastmod>
          <priority>0.80</priority>
        </url>
        <url>
          <loc>https://nerdwhocodes.com/post/razorpay-nodejs-integration</loc>
          <lastmod>2022-02-28T07:23:14+00:00</lastmod>
          <priority>0.80</priority>
        </url>
        
        
        </urlset>'
    )
})

module.exports = router;