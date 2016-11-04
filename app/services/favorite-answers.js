import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(answer) {
    this.get('favorites').pushObject(answer);
  }
});
