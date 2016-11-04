import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswers: Ember.inject.service(),

  actions: {
    addToFavorites(answer) {
      this.get('favoriteAnswers').add(answer);
    }
  }
});
