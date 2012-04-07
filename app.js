var express = require('express');
var fs = require('fs');
var ejs = require('fs');
//var nowjs = require("now");
var app = module.exports = express.createServer(express.cookieParser(),express.session({ secret: "mv secret" }));
//sendMail("nirav.patel@php2india.com","nirav.patel@php2india.com","This is subject","THis i smail ndy",function(err,msg){console.log(err||msg)});

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set("view options", {layout: true});
  
  app.set('view engine', 'ejs');
   app.use(express.cookieParser());
    app.use(express.session({ secret: "shhhhhhhhh!"}));

  app.use(express.bodyParser({uploadDir:'./uploads'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Database
var Database = require('./lib/Database');
var db = new Database();
db.connect('mongodb://localhost/bingo');

var site_pages = require('./lib/SitePages');
var sp = new site_pages();
sp.initPages(app, db);
	
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

var io = require('socket.io').listen(app);

var gameUsers = new Array();
var game = io.of('/game').on('connection', function (socket) {
	
});

function startGame(noGameBall)
{		
	var ballCount= 0;
	var bingoNoGenerator = setInterval(function() {
			ballCount++;
			var number = getNumber();
			console.log(number);
			io.of('/game').emit('BINGO number', { data: number });
			if (ballCount >= parseInt(noGameBall))
			{
				clearInterval(bingoNoGenerator);
			}
	}, 3000);
}

function getNumber()
{
	return (Math.ceil(Math.random()*100));
}


startGame(75);
