const express = require('express');

const path = require('path');

const app = express();

const mainRoutes = require('./routes/index')

app.use(mainRoutes)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000);


