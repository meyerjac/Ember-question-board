import Ember from 'ember';

var questions = [{
  id: 1,
  author: "jackson meyer",
  content: "How much do elephants weigh?",
  profilePictureURL: "https://heavyeditorial.files.wordpress.com/2016/07/jackson-meyer.jpg?quality=65&strip=all&w=780",
  info: "I am wondering for a school project"
}, {
  id: 2,
  author: "Megan Keough",
  content: "is silk made from an animal?",
  profilePictureURL: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/064/254/3874e47.jpg",
  info: "this is for work",

}, {
  id: 3,
  author: "Jauneau Meyer",
  content: "how much does usain bolt make in a year?",
  profilePictureURL: "http://www.dailyastorian.com/storyimage/DA/20150423/ARTICLE/150429827/EP/1/1/EP-150429827.jpg&MaxW=600",
  info: "I am interested yo"
}]

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
