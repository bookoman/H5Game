var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.enter = function (type) {
        if (this.curScene) {
            this.curScene.leave();
            this.curScene = null;
        }
        switch (type) {
            case this.LOGIN_SCENE:
                var loginView = new LoginViewMediator();
                this.curScene = new LoginScene(loginView, LayerManager.PLAYER_LAYER);
                this.curScene.enter();
                break;
            case this.GAME_SCENE:
                var gameScene = new GameSceneViewMediator();
                this.curScene = new GameScene(gameScene, LayerManager.PLAYER_LAYER);
                this.curScene.enter();
                break;
        }
    };
    //场景
    SceneManager.LOGIN_SCENE = 1;
    SceneManager.GAME_SCENE = 2;
    SceneManager.curScene = null;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map