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

        bodyFill: null,
        bodyFills: [
            // Reds
            '#A61000',
            '#FF1800',
            '#FF8073',
            // Oranges
            '#A66100',
            '#FF9500',
            '#FFC573',
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
            var randomIndex = Math.floor(Math.random() * this.bodyFill.length);
            this.bodyFill = this.bodyFills[randomIndex];
        },

        update: function() {
            this.parent();
        },

        draw: function() {
            this.drawHead();
            this.drawBody();
        },

        drawHead: function() {
            var x = this.pos.x + this.head.pos.x - ig.game.screen.x;
            var y = this.pos.y + this.head.pos.y - ig.game.screen.y;
            ig.system.context.fillStyle = this.head.fill;
            ig.system.context.fillRect(x, y, this.head.size.x, this.head.size.y);
        },

        drawBody: function() {

        }

    });

});