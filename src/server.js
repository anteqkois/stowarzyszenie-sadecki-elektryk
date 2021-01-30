require('dotenv').config({ path: '.env'});

const express = require('express');
const {join} = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const routes = require('./routes/index');
const adminRouter = require('./routes/admin.router');


const app = express();

//database
const database = require('./config/database');

app.set('port', process.env.PORT || 8080);
app.set('views', join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static(join(__dirname, 'public')));

app.use('/', routes);
app.use('/admin', adminRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.listen(app.get('port'), () => {
    console.log(`Listening on ${ app.get('port') }`);
});
