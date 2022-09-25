const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const morgan = require ('morgan');
const cors = require ('cors')
const helmet = require ('helmet');
const logger = require("../config/logger");
const keys = require ('../config/key')

const adminRoutes = require ('../routes/admin');






app.use(morgan("combined", { stream: logger.stream }));
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())


app.use('/api/admin', adminRoutes)



app.get("/", (req, res) => {
    const welcomeText =
      "<div style='text-align: center;'><h1>Welcome to Awesome-delicious-cake Shopping Ecommerce .</h1><p>Server is up and running, visit <a href='https://github.com/asokoidris/AWESOME-DELICIOUS-CAKE'>link</a> for more info.</p></div>";
    res.status(200).send(welcomeText);
  });


module.exports = app;