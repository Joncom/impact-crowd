ig.module('game.entities.person')
.requires('impact.entity')
.defines(function() {

    EntityPerson = ig.Entity.extend({

        size: { x: 5, y: 6 },

        head: {
            pos: { x: 1, y: 0 },
            size: { x: 3, y: 3 },
            fill: '#FFC573'
        },

        body: {
            pos: { x: 0, y: 1 },
            size: { x: 5, y: 5 },
            fill: null // selected at random
        },

        bodyColorPool: [
            // Reds
            '#A61000',
            '#FF1800',
            '#FF8073',
            // Oranges
            '#A66100',
            '#FF9500',
            // Blues
            '#043A6B',
            '#0C5DA5',
            '#679FD2',
            // Greens
            '#007D1C',
            '#00C12B',
            '#65E080'
        ],

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            var randomIndex = Math.floor(Math.random() * this.bodyColorPool.length);
            this.body.fill = this.bodyColorPool[randomIndex];
        },

        update: function() {
            this.parent();
        },

        draw: function() {
            this.drawBody();
            this.drawHead();
            this.parent();
        },

        drawHead: function() {
            var x = (this.pos.x + this.head.pos.x - ig.game.screen.x) * ig.system.scale;
            var y = (this.pos.y + this.head.pos.y - ig.game.screen.y) * ig.system.scale;
            var width = this.head.size.x * ig.system.scale;
            var height = this.head.size.y * ig.system.scale;
            ig.system.context.fillStyle = this.head.fill;
            ig.system.context.fillRect(x, y, width, height);
        },

        drawBody: function() {
            var x = (this.pos.x + this.body.pos.x - ig.game.screen.x) * ig.system.scale;
            var y = (this.pos.y + this.body.pos.y - ig.game.screen.y) * ig.system.scale;
            var width = this.body.size.x * ig.system.scale;
            var height = this.body.size.y * ig.system.scale;
            ig.system.context.fillStyle = this.body.fill;
            ig.system.context.fillRect(x, y, width, height);
        }

    });

});