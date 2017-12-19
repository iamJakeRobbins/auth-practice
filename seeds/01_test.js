

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('my_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('my_user').insert([
        {agentName: 'jake',
        	password: 'password1'},
			 	{agentName: 'david',
 	    		password: 'password2'},
      ]);
    });
};
