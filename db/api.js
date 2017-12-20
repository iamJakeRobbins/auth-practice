var knex = require('./knex')
var bcrypt = require('bcrypt')


  function signIn(user){
		return knex('my_user').where('agentName', user.agentId)
  }

	function assign_cookie(agentInfo, req){
		req.session.user = {
			id: agentInfo[0].id
		}
	}

	function authLogin(userInput, agentInfo,req,res){
		bcrypt.compare(userInput.password, agentInfo[0].password, function(err, response){ if (response === true){
			assign_cookie(agentInfo,req)
			res.render('assignment')
		} else {
			res.render('index', { title: 'gClassified', message: 'Incorrect login. Contents will self destruct' });
		}
		})
	}



  function signUp(newUser) {
		return knex('my_user').insert(newUser, 'id')
  }

	function userCreation(agent){
		if (agent[0].password === req.body.password) {
			res.render('index', { title: 'gClassified', message: 'Password Must Be Hashed. Government Secrets are at Stake!' })
		} else {
			res.render('index', { title: 'gClassified', message: 'Sign Up Successful' })
		}
	}

	module.exports = {
		authLogin,
		assign_cookie,
		signIn,
		signUp,
		userCreation
	}
