var express = require('express')
var router = express.Router()
var db = require('../db/api')
var bcrypt = require('bcrypt')
var knex = require('../db/knex')
var saltRounds = 10;

router.post('/signin', function(req, res, next){
	knex('my_user').where('agentName', req.body.agentId)
	.then(agentInfo =>{
		bcrypt.compare(req.body.password, agentInfo[0].password, function(err, response) { if (response === true){
			res.render('assignment')
		} else {
			res.render('index', { title: 'gClassified', message: 'Incorrect login. Contents will self destruct' });
		}
		}) 
});
})

router.post('/signup', function(req,res,next){
  //Use bcrypt to Sign Up
	bcrypt.genSalt(saltRounds, function(err, salt) {
	    bcrypt.hash(req.body.password, salt, function(err, hash) {
				// Store hash in your password DB.
				let newUser = {
					agentName: req.body.agentName,
					password: hash}
				knex('my_user').insert(newUser, 'id')
				.then(function(agent){
					if (agent[0].password === req.body.password) {
						res.render('index', { title: 'gClassified', message: 'Password Must Be Hashed. Government Secrets are at Stake!' })
					}
					else {
						res.render('index', { title: 'gClassified', message: 'Sign Up Successful' })
					}
				})
	    });
	});
})

module.exports = router
