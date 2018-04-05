class SignViewMediator extends eui.Component {
	private btnClose:eui.Button;
	private btnPopDialog:eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/SignViewSkin.exml";
	}
	protected childrenCreated():void
	{
		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnClose,this);
		this.btnPopDialog.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnPopDialog,this);
	}

	private onBtnClose(e:egret.TouchEvent):void
	{
		LayerManager.removeFromLayer(this,LayerManager.UI_LAYER,false,1);
	}

	private onBtnPopDialog(e:egret.TouchEvent):void
	{
		for(var i = 0;i < 5;i++)
		{
			TipsMananger.ins.addPopDialogTips();
		}
		
	}
}