"use strict";
var Engine = /** @class */ (function () {
    function Engine(maxSpeed) {
        this._maxSpeed = maxSpeed;
        this.speed = 0;
    }
    Engine.prototype.acceleraPropulsore = function () {
        return this.speed += 10;
    };
    Engine.prototype.decelerate = function () {
        return this.speed += -10;
    };
    return Engine;
}());
