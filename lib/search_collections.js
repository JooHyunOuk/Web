/**
 * Created by user on 2016-06-10.
 */
Search = new Mongo.Collection("search");

if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Search.find().count() == 0) {
            Search.insert({name: "youtube", url: "youtube.com"});
            Search.insert({name: "naver", url: "naver.com"});
            Search.insert({name: "google", url: "google.com"});
        }
    })
}