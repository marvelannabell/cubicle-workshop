const express = require('express');
const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine');

const routes=require('./routes');


// const { getCreateCube } = require('./controllers/cubeController');//named import

const app = express();

// require('./config/viewEngine')(app)  // or ===
setupViewEngine(app);

app.use(express.static('src/public'));
app.use(routes);




app.listen(config.PORT, () => console.log(`port ${config.PORT}...`));