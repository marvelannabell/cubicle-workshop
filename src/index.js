const express = require("express");
const config = require("./config/config");
const setupViewEngine = require("./config/viewEngine");

const routes = require("./routes");
const initDB = require("./config/initDB");

// const { getCreateCube } = require('./controllers/cubeController');//named import

const app = express();

// require('./config/viewEngine')(app)  // or ===
setupViewEngine(app);

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false })); //
app.use(routes);

initDB()
    .then(() => app.listen(config.PORT, () => console.log(`port ${config.PORT}...`)))
    .catch((err) => console.log(err));