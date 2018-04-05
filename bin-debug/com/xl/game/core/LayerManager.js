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
var LayerManager = (function () {
    function LayerManager() {
    }
    LayerManager.init = function (main) {
        this.backgroundLayer = new MyLayer();
        main.stage.addChild(this.backgroundLayer);
        this.playerLayer = new MyLayer();
        main.stage.addChild(this.playerLayer);
        this.uiLayer = new MyLayer();
        main.stage.addChild(this.uiLayer);
        this.tipLayer = new MyLayer();
        main.stage.addChild(this.tipLayer);
    };
    LayerManager.addToLayer = function (view, layerId, isShowMultiple, bgMaskId, isAutoCenter) {
        if (isShowMultiple === void 0) { isShowMultiple = false; }
        if (bgMaskId === void 0) { bgMaskId = 0; }
        if (isAutoCenter === void 0) { isAutoCenter = true; }
        var myLayer = this.getLayer(layerId);
        if (myLayer) {
            myLayer.add(view, isShowMultiple, bgMaskId, isAutoCenter);
        }
    };
    LayerManager.removeFromLayer = function (view, layerId, isShowMultiple, bgMaskId) {
        if (isShowMultiple === void 0) { isShowMultiple = false; }
        if (bgMaskId === void 0) { bgMaskId = 0; }
        var myLayer = this.getLayer(layerId);
        if (myLayer) {
            myLayer.remove(view, isShowMultiple, bgMaskId);
        }
    };
    LayerManager.getLayer = function (layerId) {
        switch (layerId) {
            case this.BACKGROUND_LAYER:
                return this.backgroundLayer;
            case this.PLAYER_LAYER:
                return this.playerLayer;
            case this.UI_LAYER:
                return this.uiLayer;
            case this.TIP_LAYER:
                return this.tipLayer;
        }
    };
    LayerManager.BACKGROUND_LAYER = 1;
    LayerManager.PLAYER_LAYER = 2;
    LayerManager.UI_LAYER = 3;
    LayerManager.TIP_LAYER = 4;
    //层次
    LayerManager.backgroundLayer = null;
    LayerManager.playerLayer = null;
    LayerManager.uiLayer = null;
    LayerManager.tipLayer = null;
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
var MyLayer = (function (_super) {
    __extends(MyLayer, _super);
    function MyLayer() {
        var _this = _super.call(this) || this;
        //蒙版遮罩
        _this.bgMask = null;
        _this.bgMaskCount = 0;
        _this.viewObjcet = null;
        _this.viewObjcet = {};
        return _this;
    }
    MyLayer.prototype.add = function (view, isShowMultiple, bgMaskId, isAutoCenter) {
        if (isShowMultiple === void 0) { isShowMultiple = false; }
        if (bgMaskId === void 0) { bgMaskId = 0; }
        if (isAutoCenter === void 0) { isAutoCenter = true; }
        if (isShowMultiple) {
            var viewKey = view.constructor.name;
            var views = this.viewObjcet[viewKey];
            if (views) {
                views.push(view);
            }
            else {
                this.viewObjcet[viewKey] = [];
                this.viewObjcet[viewKey].push(view);
            }
        }
        else {
            if (this.curView) {
                this.remove(this.curView);
                this.curView = null;
            }
        }
        if (bgMaskId > 0) {
            if (this.bgMask == null) {
                this.bgMask = new egret.Sprite();
            }
            if (!this.bgMask.parent) {
                this.bgMask.graphics.beginFill(0x5d5d5d, 0.5);
                this.bgMask.graphics.drawRect(0, 0, GameConfig.GAME_STAGE_WIDTH, GameConfig.GAME_STAGE_HEIGHT);
                this.bgMask.graphics.endFill();
                this.addChild(this.bgMask);
            }
            this.bgMaskCount++;
        }
        else {
            if (this.bgMask) {
                if (this.bgMask.parent) {
                    this.bgMask.parent.removeChild(this.bgMask);
                }
                this.bgMask.graphics.clear();
                this.bgMask = null;
            }
        }
        if (isAutoCenter) {
            view.x = GameConfig.GAME_STAGE_WIDTH - view.width >> 1;
            view.y = GameConfig.GAME_STAGE_HEIGHT - view.height >> 1;
        }
        this.curView = view;
        this.addChild(view);
        console.log(this.numChildren);
    };
    MyLayer.prototype.remove = function (view, isShowMultiple, bgMaskId) {
        if (isShowMultiple === void 0) { isShowMultiple = false; }
        if (bgMaskId === void 0) { bgMaskId = 0; }
        if (bgMaskId > 0 && this.bgMask && this.bgMask.parent) {
            this.bgMaskCount--;
            if (this.bgMaskCount <= 0) {
                this.bgMaskCount = 0;
                this.bgMask.parent.removeChild(this.bgMask);
                this.bgMask.graphics.clear();
                this.bgMask = null;
            }
        }
        if (isShowMultiple) {
            var views = this.viewObjcet[view.constructor.name];
            if (views) {
                views.pop();
            }
        }
        if (view.parent) {
            view.parent.removeChild(view);
        }
    };
    return MyLayer;
}(egret.Sprite));
__reflect(MyLayer.prototype, "MyLayer");
//# sourceMappingURL=LayerManager.js.map