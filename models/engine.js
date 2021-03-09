"use strict";
var Engine = /** @class */ (function () {
    function Engine(maxSpeed) {
        this._maxSpeed = maxSpeed;
        this.speed = 0;
    }
    Object.defineProperty(Engine.prototype, "getmaxSpeed", {
        get: function () {
            return this._maxSpeed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "setMaxSpeed", {
        set: function (maxSpeed) {
            this._maxSpeed = maxSpeed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "getSpeed", {
        get: function () {
            return this.speed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "setSpeed", {
        set: function (speed) {
            this.speed = speed;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.acceleraPropulsore = function () {
        return this.speed += 10;
    };
    Engine.prototype.decelerate = function () {
        return this.speed += -10;
    };
    return Engine;
}());
