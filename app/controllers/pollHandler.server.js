'use strict';

var Poll = require('../models/polls.js');

function pollHandler () {
	
	//Poll.find({}).remove().exec();
	
	this.saveFirstPoll = function (req, res) {
		var firstPoll = new Poll({
		    'author': req.user.github.username, 
		    'date': new Date(), 
		    'question':req.body.question,
		    'option1':req.body.choice1,
		    'option1Num':0,
		    'option2':req.body.choice2,
		    'option2Num':0,
		    'option3':req.body.choice3,
		    'option3Num':0,
		    'option4':req.body.choice4,
		    'option4Num':0,
		    'option5':req.body.choice5,
		    'option5Num':0,
		    'option6':req.body.choice6,
		    'option6Num':0,
		    'option7':req.body.choice7,
		    'option7Num':0,
		    'voters':[]
		});
		firstPoll.save();
		res.redirect('/');
	};
	
	this.getPolls = function (req, res) {
		Poll
			.find({}, function(err,result){
				if(err){throw err}
				res.json(result);
			});
	};
	
	this.getYourPolls = function (req, res) {
		Poll
			.find({author:req.user.github.username}, function(err,result){
				if(err){throw err}
//				res.json(result);
				res.render('yourPolls', {
					user: req.user,
					polls: result
				});
			});
	};
	
	this.getPoll = function (req, res) {
		Poll
			.find({_id:req.params.id}, function(err,result){
				if(err){throw err}
				var array = [];
				if(result[0].option7!=''){
					array.push([result[0].option1,result[0].option1Num,"option1"]);
					array.push([result[0].option2,result[0].option2Num, "option2"]);
					array.push([result[0].option3,result[0].option3Num, "option3"]);
					array.push([result[0].option4,result[0].option4Num, "option4"]);
					array.push([result[0].option5,result[0].option5Num, "option5"]);
					array.push([result[0].option6,result[0].option6Num, "option6"]);
					array.push([result[0].option7,result[0].option7Num, "option7"]);
				}
				else
				if(result[0].option6!=''){
					array.push([result[0].option1,result[0].option1Num,"option1"]);
					array.push([result[0].option2,result[0].option2Num, "option2"]);
					array.push([result[0].option3,result[0].option3Num, "option3"]);
					array.push([result[0].option4,result[0].option4Num, "option4"]);
					array.push([result[0].option5,result[0].option5Num, "option5"]);
					array.push([result[0].option6,result[0].option6Num, "option6"]);
				}
				else
				if(result[0].option5!=''){
					array.push([result[0].option1,result[0].option1Num,"option1"]);
					array.push([result[0].option2,result[0].option2Num, "option2"]);
					array.push([result[0].option3,result[0].option3Num, "option3"]);
					array.push([result[0].option4,result[0].option4Num, "option4"]);
					array.push([result[0].option5,result[0].option5Num, "option5"]);
				}
				else
				if(result[0].option4!=''){
					array.push([result[0].option1,result[0].option1Num,"option1"]);
					array.push([result[0].option2,result[0].option2Num, "option2"]);
					array.push([result[0].option3,result[0].option3Num, "option3"]);
					array.push([result[0].option4,result[0].option4Num, "option4"]);
				}
				else
				if(result[0].option3!=''){
					array.push([result[0].option1,result[0].option1Num,"option1"]);
					array.push([result[0].option2,result[0].option2Num, "option2"]);
					array.push([result[0].option3,result[0].option3Num, "option3"]);
				}
				else{
					array.push([result[0].option1,result[0].option1Num,"option1"]);
					array.push([result[0].option2,result[0].option2Num, "option2"]);
				}
				console.log(req.user);
				res.render('viewPoll', {
					user:req.user,
					question:result[0].question,
					options:array,
					pollId: req.params.id
				});
			});
	};
	
	this.vote = function (req, res) {
		var optionNumString = req.params.option+"Num";
		console.log(optionNumString);
		Poll
			.find({_id:req.params.pollId}).find({'voters':req.params.username}, function(err,data){
				if(err){throw err;}
				console.log(data.length);
				if(data.length==0){
					console.log("update triggered");
					Poll
					.findOneAndUpdate({_id:req.params.pollId}, {$inc: {[optionNumString]:1}, $push: {"voters": req.params.username}}, function(err, results){
						if(err){throw err;}
						console.log("find triggered");
						console.log(results);
						res.redirect('back');
					});
				}
				else{
					console.log("Already voted");
					res.redirect('back');
				}
			});
	};

	this.addPoll = function (req, res) {
		Poll
			.find({'voters':req.params.username}, function(err,data){
				if(err){throw err;}
				console.log(data);
			});
		Poll
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { $inc: { 'nbrClicks.clicks': 1 } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.nbrClicks);
				}
			);
	};

	this.deletePoll = function (req, res) {
		Poll
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { 'nbrClicks.clicks': 0 })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.nbrClicks);
				}
			);
	};

}

module.exports = pollHandler;