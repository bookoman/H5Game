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
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene(v, lID) {
        return _super.call(this, v, lID) || this;
    }
    LoginScene.prototype.enter = function () {
        _super.prototype.enter.call(this);
    };
    LoginScene.prototype.leave = function () {
        _super.prototype.leave.call(this);
    };
    return LoginScene;
}(BaseScene));
__reflect(LoginScene.prototype, "LoginScene");
//# sourceMappingURL=LoginScene.js.map