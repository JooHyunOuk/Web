/**
 * Created by user on 2016-06-06.
 */
if (Meteor.isClient) {
    Template.MusicList.helpers({
        list: function () {
          return Musics.find().fetch();
        }
    });
    Template.MusicList.onCreated(function () {
        this.subscribe("MusicList",{});
    });
}