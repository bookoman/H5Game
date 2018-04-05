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
var GameSceneViewMediator = (function (_super) {
    __extends(GameSceneViewMediator, _super);
    function GameSceneViewMediator() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/GameSceneSkin.exml";
        return _this;
    }
    GameSceneViewMediator.prototype.childrenCreated = function () {
        this.btnSign.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnSign, this);
    };
    GameSceneViewMediator.prototype.onBtnSign = function (e) {
        LayerManager.addToLayer(new SignViewMediator(), LayerManager.UI_LAYER, true, 1, false);
        LayerManager.addToLayer(new SignViewMediator(), LayerManager.UI_LAYER, true, 1);
    };
    return GameSceneViewMediator;
}(eui.Component));
__reflect(GameSceneViewMediator.prototype, "GameSceneViewMediator");
//# sourceMappingURL=GameSceneViewMediator.js.map