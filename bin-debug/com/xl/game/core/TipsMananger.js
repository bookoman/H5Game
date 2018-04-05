var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TipsMananger = (function () {
    function TipsMananger() {
    }
    Object.defineProperty(TipsMananger, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new TipsMananger();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    TipsMananger.prototype.addPopDialogTips = function () {
        var popDialgoTips = ObjectPool.borrowObeject(ObjectPool.POP_DIALOG_TIP);
        LayerManager.addToLayer(popDialgoTips, LayerManager.TIP_LAYER, true);
    };
    TipsMananger._ins = null;
    return TipsMananger;
}());
__reflect(TipsMananger.prototype, "TipsMananger");
//# sourceMappingURL=TipsMananger.js.map