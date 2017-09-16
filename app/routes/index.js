'use strict';

var path = process.cwd();
var PollHandler = require(path + '/app/controllers/pollHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	var pollHandler = new PollHandler();
	
/*	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index2.html');
		});
*/
	app.route('/')
		.get(function (req, res) {
			res.render('homepage', {
				user:req.user
			});
		});
	
	app.route('/renderPollList')
		.get(pollHandler.getPolls);
		
//	app.route('/renderYourPolls')
//		.get(pollHandler.getYourPolls);
		
	app.route('/polls/:id')
		.get(pollHandler.getPoll);
		
	app.route('/vote/:pollId/:option/:username')
		.post(pollHandler.vote);
		
	app.route('/getPollData/:poll')
		.get(pollHandler.getPoll);

	app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/public/login.html');
		});
		
	app.route('/newpoll')
		.get(isLoggedIn, function (req, res) {
			res.render('newPoll', {
				user: req.user
			});
		});
		
		
	app.route('/yourpolls')
		.get(isLoggedIn, pollHandler.getYourPolls);
		
		app.route('/submitpoll')
		.post(isLoggedIn, pollHandler.saveFirstPoll);

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/');
		});

	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/profile.html');
		});

	app.route('/api/:id')
		.get(isLoggedIn, function (req, res) {
			res.json(req.user.github);
		});
		
	app.route('/logged')
		.get(function(req,res){
			res.send(req.isAuthenticated());	
		});

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

};