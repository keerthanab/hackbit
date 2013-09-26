module.exports = function (compound) {

    var express = require('express');
    var app = compound.app;

compound.on('post-init', function () {
        require('./mongoose').init(compound);
    });

    app.configure(function(){
        app.use(compound.assetsCompiler.init());
        app.use(express.static(app.root + '/public', {maxAge: 86400000}));
        app.set('view engine', 'ejs');
        app.set('view options', {complexNames: true});
        app.set('jsDirectory', '/javascripts/');
        app.set('cssDirectory', '/stylesheets/');
        app.set('cssEngine', 'stylus');
        app.use(express.bodyParser());
        app.use(express.cookieParser('secret12345'));
        app.use(express.session({secret: 'secret12345'}));
        app.use(express.methodOverride());
        
        app.use(app.router);
    });


};
