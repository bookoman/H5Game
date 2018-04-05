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
var PopDialogTip = (function (_super) {
    __extends(PopDialogTip, _super);
    function PopDialogTip() {
        var _this = _super.call(this) || this;
        _this.isUser = true;
        _this.skinName = "resource/skins/PopDialogTipSkin.exml";
        return _this;
    }
    PopDialogTip.prototype.childrenCreated = function () {
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClose, this);
    };
    PopDialogTip.prototype.onBtnClose = function (e) {
        LayerManager.removeFromLayer(this, LayerManager.TIP_LAYER, true, 1);
        ObjectPool.stillObject(ObjectPool.POP_DIALOG_TIP, this);
    };
    return PopDialogTip;
}(eui.Component));
__reflect(PopDialogTip.prototype, "PopDialogTip");
//# sourceMappingURL=PopDialogTip.js.map