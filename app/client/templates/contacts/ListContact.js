Template.ListContact.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  contactList: function () {
    return Contact.find();
  }

});


Template.ListContact.events({

  'click .delete': function(){

    Meteor.call("deleteContact", currentContactID);
    /*e.preventDefault();
     if (confirm("Delete this post?")) {
     var currentPostId = this._id;

     Contact.remove(currentContactId);
     Router.go('ListContact');
     }*/
  }

});