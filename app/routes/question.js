import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
      update(question, params) {
            console.log("wprked in questioewrtewr ertwt");
        Object.keys(params).forEach(function(key) {
          if (params[key]!==undefined) {
            question.set(key, params[key]);
          }
        });
        question.save();
        this.transitionTo('index');
      },
      destroyQuestion(question) {
            console.log(question)
        question.destroyRecord();
        this.transitionTo('index');

      }
    }
});
