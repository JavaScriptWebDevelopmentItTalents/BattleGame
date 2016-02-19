/*global WorldObject, validator*/
var Inventory = (function iife(parent) {
    'use strict';

    function Inventory(size) {
        var _inventoryMaxSize,
            _inventoryCurrentSize,
            _inventoryItems = [],
            _id = 0;
        parent.call(this);


        this.getInventoryMaxSize = function get() {
            return _inventoryMaxSize;
        };
        this.setInventoryMaxSize = function set(value) {
            validator.validateIfNumber(value, 'Inventory max size');
            _inventoryMaxSize = value;
        };
        this.getInventoryCurrentSize = function get() {
            return _inventoryCurrentSize;
        };
        this.setInventoryCurrentSize = function set(value) {
            validator.validateIfNumber(value, 'Inventory current size');
            _inventoryCurrentSize = value;
        };
        this.getInventory = function get() {
            return _inventoryItems;
        };
        this.addToInventory = function addToInventory(inventoryItem) {
            validator.validateIfObject(inventoryItem, 'Player inventory item');
            if (inventoryItem.getInventorySize() + this.getInventoryCurrentSize() <= this.getInventoryMaxSize()) {
                inventoryItem.setId(_id);
                _id += 1;
                _inventoryItems.push(inventoryItem);
            } else {
                //TODO: error message not enought room
            }
            return this;
        };
        this.removeFromInventoryById = function removeFromInventory(id) {
            var i;
            for (i = 0; i < this.getInventory().length; i += 1) {
                if (this.getInventory()[i].getId() === id) {
                    _inventoryItems.splice(i, 1);
                    return this;
                }
            }
            return this;
        };

        this.setInventoryMaxSize(size);
        this.setInventoryCurrentSize(0);
    }
    Inventory.prototype = Object.create(parent.prototype);
    Inventory.prototype.constructor = Inventory;
    return Inventory;
}(WorldObject));