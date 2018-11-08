const server = require('./api/server.js');
// when pushing to a host process.env will give you a port, otherwise use local port
const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Server is over ${port}!!`));
