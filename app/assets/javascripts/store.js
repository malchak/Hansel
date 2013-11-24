// http://emberjs.com/guides/models/defining-a-store/

Hansel.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.create()
});
