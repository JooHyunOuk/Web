if (Meteor.isClient) {
    Template.MusicListItem.events({
        'click .side_li':function () {
            Session.set('music',this.name);
        },
        "click button[name=remove]" : function(evt , tmpl) {
            console.log(this);
            Musics.remove({_id: this._id});
        }
    });
}