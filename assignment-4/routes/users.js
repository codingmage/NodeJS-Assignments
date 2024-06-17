const path = require("path")

const express = require("express")

const router = express.Router()

const users = []

router.get("/", (req, res, next) => {
    res.render("users", {
        pageTitle: "Users", userList: users
    })
})

router.post("/", (req, res, next) => {
    users.push({username: req.body.username})
    res.redirect("/users")
})

exports.router = router
exports.users = users