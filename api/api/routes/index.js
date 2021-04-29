const bodyParser = require('body-parser');
const port = 3333;

module.exports = app => {
    app.use(bodyParser.json());
    app.listen(port, () => console.log(`server running ${port}`))
}