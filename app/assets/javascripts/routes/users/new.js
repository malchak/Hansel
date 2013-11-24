Hansel.UsersNewRoute = Ember.Route.extend({
	model: function(){
		Hansel.User.createRecord('user');
	}
});