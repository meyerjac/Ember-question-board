import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswers: Ember.inject.service(),

  actions: {
    addToFavorites(answer) {
      console.log(answer)
      this.get('favoriteAnswers').add(answer);
    }
  }
});
