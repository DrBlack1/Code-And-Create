var StaticServer = requestAnimationFrame('static-server');

var server = new StaticServer({
    rootPath: './public/',
    port: 3000
});

server.start(function () {
    console.log('Server started on port ' + server.port)
});