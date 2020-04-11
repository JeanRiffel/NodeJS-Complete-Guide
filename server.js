const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/error');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : false}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(port, ()=>{console.log(`Server is Running \nPort: ${port}`);});
