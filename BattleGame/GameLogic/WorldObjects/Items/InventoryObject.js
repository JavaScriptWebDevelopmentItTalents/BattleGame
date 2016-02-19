/*global WorldObject, IDropable, IDragable, validator*/
var InventoryObject = (function iife(parent, IDropable, IDragable) {
    'use strict';
    function InventoryObject(inventorySize) {
        var _inventorySize,
            _id,
            _type;
        parent.call(this);
        IDropable.call(this);
        IDragable.call(this);

        this.getInventorySize = function get() {
            return _inventorySize;
        };
        this.setInventorySize = function set(value) {
            validator.validateIfNumber(value, 'Inventory size');
            _inventorySize = value;
        };
        this.getId = function get() {
            return _id;
        };
        this.setId = function set(value) {
            validator.validateIfNumber(value, 'InventoryObject id');
            _id = value;
        };
        this.getType = function get() {
            return _type;
        };
        this.setType = function set(value) {
            validator.validateIfString(value, 'InventoryObject type');
            _type = value;
        };
        this.setInventorySize(inventorySize);
    }
    InventoryObject.prototype = Object.create(InventoryObject.prototype);
    InventoryObject.constructor = InventoryObject;
    InventoryObject.prototype.displayInfo = function show() {
        console.log('ID: ' + this.getId() + ' Type: ' + this.getType());
    };
    return InventoryObject;
}(WorldObject, IDropable, IDragable));