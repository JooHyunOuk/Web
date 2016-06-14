if (Meteor.isClient) {
    Template.SearchList.helpers({
        listName: function () {
            return "All List";
        },
        list: function () {
            return Search.find({});
        },
        Allcount: function () {
            return Search.find({}).count();
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