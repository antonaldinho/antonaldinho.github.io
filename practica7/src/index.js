const express = require('express');
require('./db/mongoose');

const router = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, function(){
    console.log('API running in port ' + port);
})