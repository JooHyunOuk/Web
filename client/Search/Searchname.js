/**
 * Created by user on 2016-06-11.
 */

if (Meteor.isClient) {
    Template.Search_name.events({
            "submit.searchName": function (event) {
                event.preventDefault();
                type_name = event.target.text.value;
                var item = Search.find({name: {$regex: type_name}}).fetch();
                console.log(JSON.stringify(item));
                console.log(type_name);
                console.log(item);
                $.each(item,function(name,value){
                   console.log(value.name);
                });
                Session.set(type_name, event.target.text.value);
            }
    });
}