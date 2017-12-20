var knex = require('./knex')

module.exports = {
  signIn: function(user) {
		return knex('my_user').where('agentName', user.agentId)
  },

	authLogin(userInput, agentInfo){
		bcrypt.compare(userInput.password, agentInfo[0].password, function(err, response){ if (response === true){
			res.render('assignment')
		} else {
			res.render('index', { title: 'gClassified', message: 'Incorrect login. Contents will self destruct' });
		}
		})
	},

  signUp: function(newUser) {
		return knex('my_user').insert(newUser, 'id')
  },

	userCreation(agent){
		if (agent[0].password === req.body.password) {
			res.render('index', { title: 'gClassified', message: 'Password Must Be Hashed. Government Secrets are at Stake!' })
		} else {
			res.render('index', { title: 'gClassified', message: 'Sign Up Successful' })
		}
	}
}
