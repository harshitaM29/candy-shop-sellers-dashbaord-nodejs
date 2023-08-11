const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/database');
const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: false }));


sequelize.sync().then(res => {
    app.listen(4000);
})
.catch(err => {
    console.log(err)
})

