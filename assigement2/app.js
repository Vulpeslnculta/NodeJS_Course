const express = require('express');

app = express();

app.use('/users', (req, res, next) => {
    res.send('<p>Users</p>');
});

app.use('/', (req, res, next) => {
    console.log('user has entered main page');
    res.send('<p>Welcome to the main page</p>');
});


app.listen(3000);