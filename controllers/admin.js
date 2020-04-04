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

