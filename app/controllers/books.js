import Ember from 'ember';
export default Ember.Controller.extend({
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
