const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.set('view engine', 'pug');

app.use('/admin',adminData.routes);
app.use(shopRouter);

    products.push({title : req.body.title});    
    app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
});

app.listen(3000, ()=>{console.log('Server is Running!');});

