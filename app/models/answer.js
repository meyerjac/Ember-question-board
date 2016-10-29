import DS from 'ember-data';

export default DS.Model.extend({
author: DS.attr(),
reponse: DS.attr(),
confidence: DS.attr(),
question: DS.belongsTo('question', { async: true }),
});
