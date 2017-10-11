var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount, active) {
        this.likesCount = likesCount;
        this.active = active;
    }
    LikeComponent.prototype.onClick = function () {
        if (this.active) {
            this.likesCount++;
            console.log(this.likesCount);
        }
        else {
            this.likesCount--;
            console.log(this.likesCount);
        }
    };
    return LikeComponent;
}());
var a = new LikeComponent(10, false);
a.onClick();
