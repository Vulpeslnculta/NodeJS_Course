const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});


app.listen(3000);