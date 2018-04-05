class PopDialogTip extends eui.Component{
	public isUser:boolean = true;
	private btnClose:eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/PopDialogTipSkin.exml";
	}
	protected childrenCreated():void
	{
		this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnClose,this);
	}

	private onBtnClose(e:egret.TouchEvent):void
	{
		LayerManager.removeFromLayer(this,LayerManager.TIP_LAYER,true,1);
		ObjectPool.stillObject(ObjectPool.POP_DIALOG_TIP,this);
	}
}