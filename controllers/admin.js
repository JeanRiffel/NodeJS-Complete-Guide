const Product = require('../models/product');


exports.getAddProducts =  (req, res, next)=>{    
    res.render('admin/add-product', {
        pageTitle : 'Add Product',
        path: 'admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProducts: true
    });
}

exports.postAddProducts = ( req, res, next)=>{        
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('./admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
            hashProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });   

    });
}


