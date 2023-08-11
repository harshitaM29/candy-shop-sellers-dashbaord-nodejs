const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/shop',shopController.getShopData);

router.post('/shop',shopController.postShopData);
module.exports = router;