import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'}, function() {
    this.route('about');
    this.route('schedule');
  });

  this.route('signup');
});

export default Router;
