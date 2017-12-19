var express = require('express')
var router = express.Router()
var db = require('../db/api')
var bcrypt = require('bcrypt')
var knex = require('../db/knex')
var saltRounds = 10;

router.post('/signin', function(req, res, next){
	db.signIn(req.body)
	.then(agentInfo =>{
		authLogin(req.body, agentInfo)
});
})

router.post('/signup', function(req,res,next){
	bcrypt.genSalt(saltRounds, function(err, salt) {
	    bcrypt.hash(req.body.password, salt, function(err, hash) {
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
