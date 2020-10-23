const 
    bodyParser = require('body-parser'),
    express = require('express'),
    mag = require('../msgLog'),
    path = require('path'),
    app = express()
;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {res.sendfile(path.join(__dirname, 'index.html'))}); 

mag(); 

app.listen(3000);


