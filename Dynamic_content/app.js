const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404);
    res.render('404', { pageTitle: "Page Not Found", path: '/404' });
});


app.listen(3000);