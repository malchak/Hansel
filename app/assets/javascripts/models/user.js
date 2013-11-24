Hansel.User = DS.Model.extend({
	email: DS.attr('string'),
	password: DS.attr('string'),
	passwordcon: DS.attr('string')
});