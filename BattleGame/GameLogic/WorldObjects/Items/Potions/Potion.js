/*global InventoryObject, validator*/
var Potion = (function iife(parent) {
    'use strict';
    var PotionSizeType = {
            small: 'small',
            medium: 'medium',
            large: 'large',
            extraLagre: 'extraLarge'
        },
        PotionInventorySize = 1;

    function Potion() {
        parent.call(this, PotionInventorySize);
        //TODO: different refill for different types
        this.getRefill = function get() {
            return 100;
        };
    }
    Potion.prototype = Object.create(parent.prototype);
    Potion.prototype.constructor = Potion;
    Potion.prototype.getRefill = function getRefill() {
        throw new Error('Not Implemented');
    };
    return Potion;
}(InventoryObject));