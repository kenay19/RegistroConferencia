const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
//const morgan = require('morgan');
//const session = require('express-session');

// Initiaizations

const server = express();
 
// Settings

server.set('port',process.env.PORT || 4000);
server.set('views',path.join(__dirname,'views'));
server.engine('.hbs',exphbs.engine({
    defaultLayout : 'main',
    layoutsDir: path.join(server.get('views'),'layouts'),
    partialsDir: path.join(server.get('views'),'partials'),
    extname : '.hbs'
}));
server.set('view engine','.hbs');

// Middlewares

server.use(favicon(path.join(__dirname,'public','img','uaemex.ico')));

//server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//  Routes

server.use(require(path.join(__dirname,'routes')));

// Global Varables
// Public Files

server.use(express.static(path.join(__dirname,'public')));

// Listening Server

server.listen(server.get('port'), () => {
    console.log("Server on port: ",server.get('port'));
});