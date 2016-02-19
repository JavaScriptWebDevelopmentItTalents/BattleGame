/*global InventoryObject*/
var Wearable = (function iife(parent) {
    'use strict';
    function Wearable(inventorySize) {
        parent.call(this, inventorySize);
        this.wearable = true;
        //TODO: implement
    }
    Wearable.prototype = Object.create(parent.prototype);
    return Wearable;
}(InventoryObject));