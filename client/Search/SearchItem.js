if(Meteor.isClient){
    Template.SearchList.events({
        "click button[name=add]":function (evt, tmpl) {
            console.log(this);
            Musics.insert(this);
        }
    });
}