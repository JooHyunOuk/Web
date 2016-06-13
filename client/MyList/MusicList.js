/**
 * Created by user on 2016-06-06.
 */
if (Meteor.isClient) {
    Template.MusicList.helpers({
        listName: function () {
            return "My List";
        },
        list: function () {
          return Musics.find().fetch();
        }
    });
    Template.MusicList.onCreated(function () {
        this.subscribe("MusicList",{});
    });
}