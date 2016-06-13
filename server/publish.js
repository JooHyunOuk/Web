Meteor.publish("MusicList",function(){
    var condition = "MusicList publish";
    console.log(condition);
    return Musics.find(condition);
});

Meteor.publish("SearchList",function () {
    var condition = "SearchList publish";
    console.log(condition);
    return Search.find({});
});