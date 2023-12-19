const app = require('./server');
const config = require('./utils/config');
const {info, error} = require('./utils/logger');

//make the server to listen the http requests
app.listen(config.PORT, () => info(`Server running at htpp://${config.HOSTNAME}:${config.PORT}`));