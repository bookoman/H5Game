var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseScene = (function () {
    function BaseScene(v, lID) {
        this.view = v;
        this.layerId = lID;
    }
    BaseScene.prototype.enter = function () {
        if (this.view && this.layerId) {
            LayerManager.addToLayer(this.view, this.layerId, false, 0);
        }
    };
    BaseScene.prototype.leave = function () {
        if (this.view && this.layerId) {
            LayerManager.removeFromLayer(this.view, this.layerId);
        }
    };
    return BaseScene;
}());
__reflect(BaseScene.prototype, "BaseScene");
//# sourceMappingURL=BaseScene.js.map