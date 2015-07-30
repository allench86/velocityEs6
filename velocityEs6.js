if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Session.setDefault('name', '');

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    name: function() {
      return Session.get('name');
    }
  });

  Template.hello.events({
    'click button': function (event, template) {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);

      var name = template.$('#name').val();
      Session.set('name', name);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
