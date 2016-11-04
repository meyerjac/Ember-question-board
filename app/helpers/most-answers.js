import Ember from 'ember';

export function mostAnswers(params) {
  var numberOfAnswers = params[0].get('answers').get('length');
  console.log(numberOfAnswers);
  // console.log(numberOfAnswers.__ember_meta__._cache.promise);
  if (numberOfAnswers >= 4) {
    return Ember.String.htmlSafe('<span class="lightbulb"> !!!</span>')
  } else if (numberOfAnswers >= 1) {
    return Ember.String.htmlSafe('<span class="lightbulb"> !</span>')
  } else {
    return Ember.String.htmlSafe('<span class="lightbulb glyphicon glyphicon-alert"> NO ANSWERS YET</span>')
  }
}

export default Ember.Helper.helper(mostAnswers);
