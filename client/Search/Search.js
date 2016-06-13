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
            Session.get(type_name);
            return Search.find({name: {$regex: type_name}}).fetch();
        },
        findName:function(){
            return "Search List";
        },
        findcount: function () {
            return S_Name.find({}).count();
        }
    });
    Template.SearchList.onCreated(function () {
        this.subscribe("SearchList", {});
    });

}