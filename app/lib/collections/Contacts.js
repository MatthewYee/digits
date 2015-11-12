contact = "Contact";  // avoid typos, this string occurs many times.

Contact = new Mongo.Collection(contact);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param doc The Stuff document.
   */
  addContact: function(doc) {
    check(doc, Contact.simpleSchema());
    Contact.insert(doc);
  },
  /**
   * INvoked by autoform to delete new stuff record
   * added by matthew yee
   */
  deleteContact: function(doc, docID){ // added
    check(doc, Contact.simpleSchema());
    Contact.remove(docID);
    //Contact.update({_id: docID}, doc});
  },

  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param doc The Stuff document.
   * @param docID It's ID.
   */
  editContact: function(doc, docID) {
    check(doc, Contact.simpleSchema());
    Contact.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(contact, function () {
    return Contact.find();
  });
}


/**
 * Create the schema for Stuff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Contact.attachSchema(new SimpleSchema({
  first: {
    label: "First",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contact,
      placeholder: "First name"
    }
  },
  last: {
    label: "Last",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contact,
      placeholder: "Last name"
    }
  },
  address: {
    label: "Address",
    type: String,
    optional: false,
    max: 40,
    autoform: {
      group: contact,
      placeholder: "Address"
    }
  },
  phone: {
    label: "Phone",
    type: String,
    optional: false,
    autoform: {
      group: contact,
      placeholder: "Phone Number"
    }
  },
  email: {
    label: "Email",
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: contact,
      placeholder: "username@email.com"
    }
  }
}));
