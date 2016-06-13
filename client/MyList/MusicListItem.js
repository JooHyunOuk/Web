if (Meteor.isClient) {
    Template.MusicListItem.events({
        "click button[name=remove]" : function(evt , tmpl){
            console.log(this);
            Musics.remove({_id:this._id});
        }
    })
}