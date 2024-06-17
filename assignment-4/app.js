const express = require("express")

const path = require("path")

const bodyParser = require('body-parser');

const indexPage = require("./routes/index")

const usersPage = require("./routes/users")

const app = express()

app.set('view engine','ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: true}));

app.use("/users", usersPage.router)

app.use("/", indexPage)

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found'});
/*     res.status(404).send("Error 404. Page not found.") */
})

app.listen(3000);