import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['confidence:desc'],
   sortedAnswer: Ember.computed.sort('question.answers', 'sortBy'),

actions: {
  delete(question) {
    if(confirm('are you sure you want to delete this question?')) {
      this.sendAction('destroyQuestion', question);
    }
  }
}
});
