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
var LoginViewMediator = (function (_super) {
    __extends(LoginViewMediator, _super);
    function LoginViewMediator() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/LoginViewSkin.exml";
        return _this;
    }
    LoginViewMediator.prototype.childrenCreated = function () {
        this.addEvents();
    };
    LoginViewMediator.prototype.addEvents = function () {
        this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginTouch, this);
    };
    LoginViewMediator.prototype.onLoginTouch = function (e) {
        SceneManager.enter(SceneManager.GAME_SCENE);
    };
    return LoginViewMediator;
}(eui.Component));
__reflect(LoginViewMediator.prototype, "LoginViewMediator");
//# sourceMappingURL=LoginViewMediator.js.map