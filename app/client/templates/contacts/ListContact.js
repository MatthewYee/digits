Template.ListContact.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  contactList: function () {
    return Contact.find();
  }
});