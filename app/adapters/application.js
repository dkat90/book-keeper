import config from '../config/environment';
import Firebase from 'firebase';
import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: new Firebase(config.firebase)
});
