import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },


        saveAnswer() {
          console.log('hello');
         var params = {
           author: this.get('author'),
           reponse: this.get('reponse'),
           confidence: this.get('confidence'),
           question: this.get('question')
         };
         this.set('addNewAnswer', false);
         this.sendAction('saveAnswer', params);
       }
  }
});
