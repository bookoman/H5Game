var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(v, lID) {
        return _super.call(this, v, lID) || this;
    }
    GameScene.prototype.enter = function () {
        _super.prototype.enter.call(this);
    };
    GameScene.prototype.leave = function () {
        _super.prototype.leave.call(this);
    };
    return GameScene;
}(BaseScene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map