import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newQuestionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        info: this.get('info'),
        profilePictureURL: this.get('profilePictureURL'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion5', params);
    }
  }
});
