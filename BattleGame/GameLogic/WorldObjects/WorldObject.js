var WorldObject = (function iife() {
    'use strict';
    function WorldObject() {
        var _dom,
            _position,
            _size;
    }

    WorldObject.prototype.draw = function draw() {
        throw new Error('Not implemented');
    };
    return WorldObject;
}());