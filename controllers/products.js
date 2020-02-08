const products =  [];

exports.getAddProducts =  (req, res, next)=>{    
    res.render('add-product', {
        pageTitle : 'Add Product',
        path: 'admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProducts: true
    });
}

exports.postAddProducts = ( req, res, next)=>{    
    products.push({title : req.body.title});    
    res.redirect('/');
}

exports.getProducts = (req, res, next)=>{
    console.log(adminData.products);
    const products = adminData.products;  
    res.render('shop', {
        prods: products,
        pageTitle: 'shop',
        path: '/',
        hashProducts: products.length > 0,
        activeShop: true,
        productCSS: true
        }     
    );
}