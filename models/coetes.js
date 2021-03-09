"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(name) {
        this._engines = new Array();
        this._currentPower = 0;
        this._name = name;
    }
    Rocket.prototype.addEngine = function (engine) {
        this._engines.push(engine);
    };
    // metodo para obtner todas las info de un rocket
    Rocket.prototype.GetRocketInfo = function () {
        var actualEngine;
        var infoEngine = "";
        for (var i = 0; i < this._engines.length; i++) {
            actualEngine = this._engines[i];
            infoEngine += " " + actualEngine._maxSpeed;
        }
        return this._name + " has " + this._engines.length + " thrusters " + "<br>" + infoEngine + "<br>";
    };
    // metodo para saber cual es la max power del rocket
    Rocket.prototype.maxPower = function () {
        var thruster;
        var maxPower = 0;
        for (var i = 0; i < this._engines.length; i++) {
            thruster = this._engines[i];
            maxPower += thruster._maxSpeed;
        }
        return maxPower;
    };
    Rocket.prototype.acelerarRocket = function () {
        var maxPower2 = this.maxPower();
        var accelerate;
        if (this._currentPower < maxPower2) {
            for (var i = 0; i < this._engines.length; i++) {
                accelerate = this._engines[i];
                if (accelerate.speed < accelerate._maxSpeed) {
                    accelerate.acceleraPropulsore();
                    this._currentPower += 10;
                }
            }
        }
        return "Actual power: " + this._currentPower;
    };
    Rocket.prototype.frenarRocket = function () {
        var decelerate;
        if (this._currentPower > 0) {
            for (var i = 0; i < this._engines.length; i++) {
                decelerate = this._engines[i];
                if (decelerate.speed > 0) {
                    decelerate.decelerate();
                    this._currentPower += -10;
                }
            }
        }
        return this._currentPower;
    };
    return Rocket;
}());
