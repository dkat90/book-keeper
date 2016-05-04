import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
     return this.get("session").fetch().catch(function() {});
   },
   actions: {
     signIn: function(provider) {
       this.get("session").open("firebase", { provider: provider, settings:{
         scope: ['https://www.googleapis.com/auth/books']
       }}).then(function(data) {
         console.log(data.currentUser);
         localStorage.setItem("accessToken", data.currentUser.accessToken);
         localStorage.setItem("displayName", data.currentUser.displayName);
         localStorage.setItem("sid", data.currentUser.id);
       });
     },
     signOut: function() {
       this.get("session").close();
       localStorage.removeItem("accessToken");
       localStorage.removeItem("displayName");
       localStorage.removeItem("id");
       localStorage.removeItem("longitude");
       localStorage.removeItem("latitude");
     }
   }
});
