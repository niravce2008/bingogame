var SitePages = module.exports = function SitePages(){};
var fs = require('fs');	

SitePages.prototype = {
	
	db: null
	,initPages: function(app,db){
		
	this.db = db;
	var self = this;
		app.get('/', function(req, res){
				res.render('index', {
					 title: 'Game',
					 session:req.session,
					 showFullNav: true
				});
		});
		
		app.get('/registration', function(req, res){
				res.render('registration', {
					 title: 'Registration',
					 session:req.session,
					 showFullNav: true
				});
		});
		
		app.get('/signin', function(req, res){
				res.render('signin', {
					 title: 'Signin',
					 session:req.session,
					 showFullNav: true
				});
		});
		
	}
};