import Ember from 'ember';

export default Ember.Service.extend({

  favanswers: [],

  add(answer) {
    this.get('favanswers').pushObject(answer);
    console.log(answer)
  }

});
