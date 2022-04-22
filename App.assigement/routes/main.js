const express = require("express");

const router = express.Router();

const usernames = [];

router.post("/add-user", (req, res, next) => {
    usernames.push({ name: req.body.name });
    res.redirect("/users");
});

router.get("/users", (req, res, next) => {
    res.render("users", {
        pageTitle: "List Users",
        names: usernames,
    });
});

router.get("/", (req, res, next) => {
    res.render("index", {
        pageTitle: "Home Page",
    });
});

module.exports = router;