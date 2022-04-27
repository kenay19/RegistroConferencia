const server = require('express')();

// initializations


// settings 

server.set('port', process.env.PORT || 3000);

// routes

// middlewares

// public files

// initialization server


server.listen(server.get('port'), () => {
    console.log('listening on port ' + server.get('port'));
});