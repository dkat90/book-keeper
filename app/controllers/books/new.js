import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    publishBook: function() {
      var newBook = this.store.createRecord('book', {
        title: this.get('title'),
        author: this.get('author'),
        pubYear: this.get('pubYear'),
        image: this.get('image'),
        creator: this.get("session.currentUser.displayName")
      });
      newBook.save().then(function(){
        this.set('title',"");
        this.set('author',"");
        this.set('pubYear',"");
        this.set('image',"");
      });
      this.transitionToRoute('books');
    },
    goBack: function() {
      this.transitionToRoute('books');
    }
  },
});
