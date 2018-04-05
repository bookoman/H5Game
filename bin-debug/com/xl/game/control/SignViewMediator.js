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
var SignViewMediator = (function (_super) {
    __extends(SignViewMediator, _super);
    function SignViewMediator() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/SignViewSkin.exml";
        return _this;
    }
    SignViewMediator.prototype.childrenCreated = function () {
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClose, this);
        this.btnPopDialog.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnPopDialog, this);
    };
    SignViewMediator.prototype.onBtnClose = function (e) {
        LayerManager.removeFromLayer(this, LayerManager.UI_LAYER, false, 1);
    };
    SignViewMediator.prototype.onBtnPopDialog = function (e) {
        for (var i = 0; i < 5; i++) {
            TipsMananger.ins.addPopDialogTips();
        }
    };
    return SignViewMediator;
}(eui.Component));
__reflect(SignViewMediator.prototype, "SignViewMediator");
//# sourceMappingURL=SignViewMediator.js.map