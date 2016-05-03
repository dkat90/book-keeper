import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    publishBook: function() {
      var newBook = this.store.createRecord('book', {
        title: this.get('title'),
        author: this.get('author'),
        pubYear: this.get('pubYear'),
      });
      newBook.save();
      this.transitionTo('books');
    },
  },
});
