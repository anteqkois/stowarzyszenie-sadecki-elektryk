require('dotenv').config({ path: '.env'});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const routes = require('./routes/index');


const app = express();

//database
const database = require('./config/database');

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', routes);

app.listen(app.get('port'), () => {
    console.log(`Listening on ${ app.get('port') }`);
});
