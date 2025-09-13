"use strict";
exports.__esModule = true;
exports.LikeButton = void 0;
var LikeButton = /** @class */ (function () {
    function LikeButton(likes, buttonState) {
        this.likes = likes;
        this.buttonState = buttonState;
    }
    LikeButton.prototype.buttonClicked = function () {
        if (this.buttonState) {
            this.likes--;
            this.buttonState = false;
        }
        else {
            this.likes++;
            this.buttonState = false;
        }
        console.log('Likes - ', this.likes);
    };
    return LikeButton;
}());
exports.LikeButton = LikeButton;
