import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveBook() {
      // newBook.save().then(() => this.transitionToRoute('books'));
      var titleEdited = this.get("model.title")
      var authorEdited = this.get("model.author")
      var pubYearEdited = this.get("model.pubYear")
      // console.log(title)
      // this.store.findRecord('book', this.model.id).then(function(book){
      //   book.set("model.title", title)
      //   book.set("model.author", author)
      //   book.set('model.pubYear', pubYear)
      //   book.save()
      // })
    this.store.findRecord('book', this.model.id).then(function(boob){

        boob.setProperties({title: titleEdited, author: authorEdited, pubYear: pubYearEdited});
        // boob.set(title, "model.title"),
        // boob.set(author, "model.author"),
        // boob.set(pubYear, "model.pubYear"),
        boob.save();
      });

      this.transitionToRoute('books');
      // var newBook = this.store.createRecord('book', {
      //   title: this.get('model.title'),
      //   author: this.get('model.author'),
      //   pubYear: this.get('model.pubYear'),
      //   });
      // newBook.save();
      // this.transitionToRoute('books');
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
    },
    goBack: function() {
      this.transitionToRoute('books');
    },
  }
});
