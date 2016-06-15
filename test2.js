if (Meteor.isClient) {

  Template.layout.events({

  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
