const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const absolutePath = process.argv[2];
const swaggerDocument = require(absolutePath)

var options = {
};

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.listen('8585', () => {
  var url = 'http://localhost:8585';
  var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
  require('child_process').exec(start + ' ' + url);
})

