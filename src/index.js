const express = require("express");
const cookieParser = require('cookie-parser');

const config = require("./config/config.js");
const authMiddleware = require('./middlewares/authMiddleware.js')
const setupViewEngine = require("./config/viewEngine");

const routes = require("./routes");
const initDB = require("./config/initDB");

// const { getCreateCube } = require('./controllers/cubeController');//named import

const app = express();

// require('./config/viewEngine')(app)  // or ===
setupViewEngine(app);

app.use(express.static("src/public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); 

app.use(authMiddleware.authentication);//must be before routes and afetr cookieParser

app.use(routes);

initDB()
    .then(() => app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}...`)))
    .catch((err) => console.log(err.message));