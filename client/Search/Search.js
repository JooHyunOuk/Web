if (Meteor.isClient) {
    Template.SearchList.helpers({
        list: function () {
            return Search.find({});
        },
        findList: function () {
         return Session.get('find');
        },
        findName: function () {
            return "Search List";
        },
        findcount: function () {
            return  Session.get('count');
        }
    });
    Template.SearchList.onCreated(function () {
        this.subscribe("SearchList", {});
    });

}