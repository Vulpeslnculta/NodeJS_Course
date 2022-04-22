const fs = require('fs');
const path = require('path');

const getProductsFromFile = (cb) => {
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));

        }
    });
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
        fs.readFile(p, (err, fileContent) => {

        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}