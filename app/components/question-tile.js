import Ember from 'ember';

export default Ember.Component.extend({
  imageAndInfoIsShowing: false,
  actions: {
    showStuff: function() {
      this.set('imageAndInfoIsShowing', true);
    },
    hideStuff: function() {
      this.set('imageAndInfoIsShowing', false);
    },
  }
});
