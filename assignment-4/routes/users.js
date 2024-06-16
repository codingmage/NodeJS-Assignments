const path = require("path")

const express = require("express")

const router = express.Router()

const users = []

router.get("/", (req, res, next) => {
    res.render("users")
})

router.post("/", (req, res, next) => {
    users.push(req.body.username)
    res.redirect("/users")
})

module.exports = router