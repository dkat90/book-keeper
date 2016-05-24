import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    deleteBook(book) {
      book.deleteRecord();
      book.save();
    },
    imageShow(){
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    }
  },
});
