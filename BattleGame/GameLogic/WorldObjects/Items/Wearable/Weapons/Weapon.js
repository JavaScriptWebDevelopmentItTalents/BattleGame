/*global InventoryObject, Wearable, validator*/
var Weapon = (function iife(parent) {
    'use strict';
    function Weapon(inventorySize, damage) {
        var _bonusDamage;
        parent.call(this, inventorySize);
        validator.validateIfNumber(damage, 'Weapon damage');
        _bonusDamage = damage;
        this.getBonusDamage = function get() {
            return _bonusDamage;
        };
        this.isWeared = true;
        this.setType('weapon');
    }
    Weapon.prototype = Object.create(parent.prototype);
    Weapon.constructor = Weapon;
    return Weapon;
}(Wearable));