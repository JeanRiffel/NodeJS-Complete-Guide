const Product = require('../models/product');

exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('./shop/product-list', {
            prods: products,
            pageTitle: 'shop',
            path: '/products',
            hashProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });   
    });
}

exports.getProduct = (req, res, next)=>{
    const prodId = req.params.productId;

    Product.findById(prodId, product => {
            res.render('./shop/product-details', {
                product : product, 
                pageTitle: 'Product',
                path: '/products'
            });        
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('./shop/index', {
            prods: products,
            pageTitle: 'shop',
            path: '/',
            hashProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });   
    });
}

exports.postCart = (req, res, next) =>{
    const prodId = req.body.productId;
    res.redirect('/cart');
}

exports.getCart = (req, res, next) => {
    res.render('./shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    });   
}

exports.getOrder = (req, res, next) => {
    res.render('./shop/orders', {
        pageTitle: 'Your Order',
        path: '/orders'
    });   
}

exports.getCheckOut = (req, res, next) => {
    res.render('./shop/checkout', {
        pageTitle: 'Your Cart',
        path: '/checkout'
    });   
}




    

