"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this._likesCount = 0;
        this._active = true;
    }
    Object.defineProperty(LikeComponent.prototype, "like", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            if (value = false) {
                this._active = false;
            }
            else if (value = true) {
                this._active = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.onClick = function () {
        if (!this.active) {
            this._likesCount++;
            console.log("Likes Increase" + this._likesCount);
        }
        else {
            this._likesCount--;
            console.log("Likes Decrease" + this._likesCount);
        }
    };
    return LikeComponent;
}());
exports["default"] = LikeComponent;
