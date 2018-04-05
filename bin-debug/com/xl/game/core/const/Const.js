var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Const = (function () {
    function Const() {
    }
    return Const;
}());
__reflect(Const.prototype, "Const");
var GameConfig = (function () {
    function GameConfig() {
    }
    /**尺寸 */
    GameConfig.GAME_STAGE_WIDTH = 750;
    GameConfig.GAME_STAGE_HEIGHT = 1334;
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=Const.js.map