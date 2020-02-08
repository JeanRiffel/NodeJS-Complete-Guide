const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRouter);

app.use((req, res, next)=>{    
    res.status(404).render('404', {pageTitle : 'Page not found'});
});

app.listen(3000, ()=>{console.log('Server is Running!');});
