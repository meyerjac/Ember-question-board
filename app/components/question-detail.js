import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  delete(question) {
    if(confirm('are you sure you want to deete this question?')) {
      this.sendAction('destroyQuestion', question);
    }
  }
}
});
