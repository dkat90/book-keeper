import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveBook() {
      console.log(this.model.id)
      // newBook.save().then(() => this.transitionToRoute('books'));
      var title = this.get('title')
      var author = this.get('author')
      var pubYear = this.get('pubYear')
      console.log(title)
      this.store.findRecord('book', this.model.id).then(function(book){
        book.set("title", title)
        book.set("author", author)
        book.set('pubYear', pubYear)
        book.save()
      })
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
