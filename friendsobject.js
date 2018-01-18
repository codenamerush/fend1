/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name : "Aarushi",
    friends : 123,
    messages : ["Hello", "Hi there!", "I'm online."],
    postMessage: function(message) {
    facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
    facebookProfile.messages.splice(index,1);
    },
    addFriend: function() {
    facebookProfile.friends++;
    },
    removeFriend: function() {
    facebookProfile.friends--;
    }
};

console.log(facebookProfile.name + " " + facebookProfile.friends + " " + facebookProfile.messages);
facebookProfile.postMessage("Hello, new message here");
facebookProfile.addFriend();
console.log(facebookProfile.name + " " + facebookProfile.friends + " " + facebookProfile.messages);
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.deleteMessage(2);
console.log(facebookProfile.name + " " + facebookProfile.friends + " " + facebookProfile.messages);