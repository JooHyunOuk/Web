if(Meteor.isClient) {
    var player = document.getElementById('audio');
    Template.player.helpers({
       music_name:function(){
           return Session.get('music');
       } 
    });
    Template.player.events({
        'click #play': function() {
            player.load();
            player.play();
        },
        'click #pause': function() {
           
            player.pause();
        },
        'click #volumeUp': function() {
            if(player.volume >= 0) {
                player.volume = player.volume + (0.1)
            }
        },
        'click #volumeDown': function() {
            if(player.volume <= 1) {
                player.volume = player.volume - (0.1)
            }
        }
    });
}