class GameSceneViewMediator extends eui.Component{
	private btnSign:eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/GameSceneSkin.exml";
	}
	protected childrenCreated():void
	{
		this.btnSign.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnSign,this);
	}

	private onBtnSign(e:egret.TouchEvent):void{
		LayerManager.addToLayer(new SignViewMediator(),LayerManager.UI_LAYER,true,1,false);
		LayerManager.addToLayer(new SignViewMediator(),LayerManager.UI_LAYER,true,1);
	}
}