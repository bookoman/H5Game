var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ObjectPool = (function () {
    function ObjectPool() {
    }
    ObjectPool.init = function () {
        var i = 0;
        this.popDialogTipAry = new Array();
        for (i = 0; i < 10; i++) {
            this.popDialogTipAry.push(new PopDialogTip());
        }
    };
    /**借用对象 */
    ObjectPool.borrowObeject = function (property) {
        var objectAry = this[property + "Ary"];
        console.log("借用后还剩多少个+PopDialogTip" + objectAry.length);
        return objectAry.pop();
    };
    /**还对象 */
    ObjectPool.stillObject = function (property, object) {
        var objectAry = this[property + "Ary"];
        objectAry.push(object);
        console.log("还后还剩多少个+PopDialogTip" + objectAry.length);
    };
    /**对象池对象 */
    ObjectPool.POP_DIALOG_TIP = "popDialogTip";
    /**弹框tips */
    ObjectPool.popDialogTipAry = null;
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
//# sourceMappingURL=ObjectPool.js.map