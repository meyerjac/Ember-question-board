import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  profilePictureURL: DS.attr(),
  info: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
