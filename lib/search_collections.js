/**
 * Created by user on 2016-06-10.
 */
Search = new Mongo.Collection("search");

if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Search.find().count() == 0) {
            Search.insert({name: "", artist: "", album: ""});
            Search.insert({name: "", artist: "", album: ""});
            Search.insert({name: "", artist: "", album: ""});
        }
    })
}