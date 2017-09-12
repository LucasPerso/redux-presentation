const catApi = require('cat-api');
const cors = require('cors');
const express = require('express');

const app = this.app = express();
app.use(cors());
app.use('/cat-api', catApi('/cat-api'));
app.listen(1212, function() {
    console.log('Cat API listening on 1212');
});
