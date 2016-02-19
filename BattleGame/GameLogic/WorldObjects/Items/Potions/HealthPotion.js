/*global Potion*/
var HealthPotion = (function iife(parent) {
    'use strict';
    function HealthPotion(sizeType) {
        parent.call(this, sizeType);
        this.setType('health');
    }
    HealthPotion.prototype = Object.create(parent.prototype);
    HealthPotion.prototype.constructor = HealthPotion;
    HealthPotion.prototype.refill = function refill(player) {
        player.setHealth(this.getRefill());
    };
    return HealthPotion;
}(Potion));