People = new Mongo.Collection("people");
 
if (Meteor.isClient) {
  // This code only runs on the client

  Template.body.events({
    "submit .student-event-signin": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });
}