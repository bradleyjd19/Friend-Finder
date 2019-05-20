const friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    const input = req.body;
    let newFriend = {
      name: input.name,
      photo: input.photo,
      scores: []
    };
    let scoresArr = [];
    let diffArr = [];
    for (let i = 0; i < input.scores.length; i++) {
      scoresArr.push(parseInt(input.scores[i]));
    };
    newFriend.scores = scoresArr;
    for (let i = 0; i < friends.length; i++) {
      diffArr.push(compareScores(scoresArr, friends[i].scores));
    };
    console.log(diffArr);
    let matchValue = diffArr.indexOf(Math.min.apply(null, diffArr));
    console.log(matchValue);
    let matchFriend = friends[matchValue];
    const matchTag = matchFriend.tagline;
    const matchName = matchFriend.name;
    const matchPhoto = matchFriend.photo;

    friends.push(newFriend);
    
    res.json({matchTag: matchTag, matchName: matchName, matchPhoto: matchPhoto});
  });

  function compareScores(arr1, arr2) {
    let difference = 0;
    for (let i = 0; i < arr1.length; i++) {
      difference += Math.abs(arr1[i] - arr2[i]);
    }
    return difference;
  }

};


