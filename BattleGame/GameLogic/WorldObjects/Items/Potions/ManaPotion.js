/*global Potion*/
var ManaPotion = (function iife(parent) {
    'use strict';
    function ManaPotion(sizeType) {
        parent.call(this, sizeType);
        this.setType('mana');
    }
    ManaPotion.prototype = Object.create(parent.prototype);
    ManaPotion.prototype.constructor = ManaPotion;
    ManaPotion.prototype.refill = function refill(player) {
        player.setMana(this.getRefill());
    };
    return ManaPotion;
}(Potion));