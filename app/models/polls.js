'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
	
		author: String,
		date: String,
		question: String,
		option1: String,
     option1Num: Number,
     option2: String,
     option2Num: Number,
     option3: String,
     option3Num: Number,
     option4: String,
     option4Num: Number,
     option5: String,
     option5Num: Number,
     option6: String,
     option6Num: Number,
     option7: String,
     option7Num: Number,
	 voters: []
});

module.exports = mongoose.model('Poll', Poll);
