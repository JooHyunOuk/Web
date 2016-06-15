/**
 * Created by user on 2016-06-11.
 */

if (Meteor.isClient) {
    Template.Search_name.events({
            "submit.searchName": function (event) {
                event.preventDefault();
                var type_name = event.target.text.value;
                Session.set('find', Search.find({name: {$regex: type_name}}).fetch());
                Session.set('count', Search.find({name: {$regex: type_name}}).count());
            }
    });
}