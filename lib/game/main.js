ig.module('game.main')
.requires(
    'impact.debug.debug',
    'impact.game',
    'impact.font',
    'game.entities.person'
)
.defines(function(){

    MyGame = ig.Game.extend({

        sortBy: ig.Game.SORT.POS_Y,

        init: function() {
            for(var i=0; i<400; i++) {
                var x = Math.floor(Math.random() * 50) + ig.system.width/2 - 25;
                var y = Math.floor(Math.random() * 50) + ig.system.height/2 - 25;
                this.spawnEntity(EntityPerson, x, y);
            }
        },

        update: function() {
            // Update all entities and backgroundMaps
            this.parent();

            // Add your own, additional update code here
        },

        draw: function() {
            // Draw all entities and backgroundMaps
            this.parent();
        },

        spawnEntity: function( type, x, y, settings ) {
            this.sortEntitiesDeferred();
            return this.parent(type, x, y, settings);
        }

    });

    // Start the Game with 60fps, a resolution of 320x240, scaled
    // up by a factor of 2
    ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
