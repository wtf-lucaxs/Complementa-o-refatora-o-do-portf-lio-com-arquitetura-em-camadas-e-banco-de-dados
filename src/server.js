const express = require('express');
const path = require('path');
const app = express();
const portfolioRoutes = require('./routes/portfolio.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', portfolioRoutes);

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
