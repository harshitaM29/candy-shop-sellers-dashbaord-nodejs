const Shop = require('../models/shop');

exports.getShopData = async(req,res,next) => {
    const data = await Shop.findAll();
    res.status(200).json(data);
};

exports.postShopData = async(req,res,next) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const shopData = await Shop.create({
        name:name,
        description:description,
        price:price,
        quantity:quantity
    });
    res.status(201).json(shopData);
};

