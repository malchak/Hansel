// For more information see: http://emberjs.com/guides/routing/

Hansel.Router.map(function() {
  this.resource('users', function(){
  	this.route('new');
  });
});
