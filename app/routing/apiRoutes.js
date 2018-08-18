

let friendsData = require("../data/friends");

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post('/api/friends', function (req, res) {
    var newFriend = req.body;
    friendsData.push(newFriend);
    console.log("Added new Friend to list: " + JSON.stringify(newFriend));

    // variables for newfriend 

    let diffTotal = [];
    let newFriendIndex = friendsData.length - 1;
    console.log('new friend index ' + newFriendIndex)

    for (i = 0; i < friendsData.length - 1; i++) {

        let diff = 0;

        for (i = 0; i < friendsData[i].scores.length; i++) {
            diff += Math.abs(friendsData[i].scores[i] - friendsData[newFriendIndex].scores[i]);
        }

        diffTotal.push(parseInt(scoreDiff));
    }
    console.log("Uncompatiable", Math.min(...diffTotal))

    let index = diffTotal.indexOf(Math.min(...diffTotal))

    console.log('You found a match: ' + JSON.stringify(friendData[index]))
    res.json(friendsData[index]);
});

}
