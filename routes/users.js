var express = require('express')
var router = express.Router()
var db = require('../db/api')
var bcrypt = require('bcrypt')
var saltRounds = 10;

router.post('/signin', function(req, res, next){
	db.signIn(req.body, req, res)
	.then(agentInfo =>{
		db.authLogin(req.body, agentInfo, req, res)
});
})

router.post('/signup', function(req,res,next){
	bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
		let newUser = {
			agentName: req.body.agentName,
			password: hash}
		db.signUp(newUser)
			.then(function(agent){
				db.userCreation(agent)
			})
		})
})

module.exports = router
