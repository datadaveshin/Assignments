describe("EventRecommender", () => {
    const { EventRecommender, User, Event } = require('../index.js'); // Update with your class names and file name
    let er; 
    let testEvent = new Event("Paramore","On tour","10.10.2020","San Jose","Arena","$120");
    let testUser = new User("Amy","Ung");

    beforeEach(() => {
      er = new EventRecommender();
    });
  
    describe("addEvent", () => {
      it("adds a new Event to the system", () => {
        er.addEvent(testEvent);
        expect(er.events.length).toEqual(1);
        expect(er.events[0].eName).toEqual("Paramore"); // what are some other things you can test?
      });
    });
  
    describe("addUser", () => {
      it("adds a new User to the system", () => {
        er.addUser(testUser);
        expect(er.users.length).toEqual(1);
      });
    });
  
    describe("saveUserEvent", () => {
      it("adds an event to a user's personal event array", () => {
        er.addEvent("Make a new event");
        er.addUser("Make a new user");
        er.saveUserEvent(testEvent, testUser); // change these to match your method signature
        expect(er.users.likes.length).toEqual(1);
      });
    });
  
    describe("deleteUser", () => {
      it("removes a User from the system", () => {
        er.addUser("Make a new user here that you will delete later");
        er.deleteUser(testUser);
        expect(er.users.length).toEqual(0);
      });
    });
  
    describe("deleteEvent", () => {
      it("removes the event from the system", () => {
        er.addEvent("A new event that you will delete later");
        er.deleteEvent("Change Me");
        expect(er.events.length).toEqual(0);
      });
    });
  });