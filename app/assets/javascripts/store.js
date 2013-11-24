// http://emberjs.com/guides/models/defining-a-store/

Hansel.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
