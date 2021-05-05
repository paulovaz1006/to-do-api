const bodyParser = require('body-parser');
const userRoutes = require('./user');
const port = 3333;

module.exports = app => {
    app.use(bodyParser.json());
    app.listen(port, () => console.log(`server running ${port}`));
    app.use(userRoutes)
}