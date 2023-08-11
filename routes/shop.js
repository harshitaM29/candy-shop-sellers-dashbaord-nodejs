const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/shop',shopController.getShopData);

router.post('/shop',shopController.postShopData);

router.put('/edit-shop/:id',shopController.editShopData);

router.delete('/delete/:id',shopController.deleteShopData);
module.exports = router;