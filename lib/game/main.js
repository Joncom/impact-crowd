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
        numberOfPeople: 100,
        areaWidth: 50,
        areaHeight: 50,

        init: function() {
            for(var i=0; i<this.numberOfPeople; i++) {
                var x = Math.floor(Math.random() * this.areaWidth);
                var y = Math.floor(Math.random() * this.areaHeight);
                // Center to screen.
                x += (ig.system.width/2 - this.areaWidth/2);
                y += ig.system.height/2 - this.areaHeight/2;
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
