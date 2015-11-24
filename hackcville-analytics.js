People = new Mongo.Collection("people");
 
if (Meteor.isClient) {
  // This code only runs on the client

  Template.body.events({
    "submit .student-event-signin": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get values from form elements
      var name = event.target.name.value;
      var email = event.target.email.value;
      var gradYear = event.target.email.gradYear;
      var major = event.target.email.major;
      var referralMethod = event.target.referralMethod.value;

      // TODO: Haven't decided how to capture "first time" event attendance yet...
 
      // Insert a person into the collection
      People.insert({
        name: name,
        email: email,
        gradYear: gradYear,
        major: major,
        referralMethod: referralMethod,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });
}