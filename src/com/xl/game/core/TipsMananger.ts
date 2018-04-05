class TipsMananger {
	
	private static _ins:TipsMananger = null;
	private constructor() {
		
	}
	public static get ins():TipsMananger
	{
		if(this._ins == null)
		{
			this._ins = new TipsMananger();
		}
		return this._ins;
	}
	
	public addPopDialogTips():void
	{
		
		var popDialgoTips:PopDialogTip = ObjectPool.borrowObeject(ObjectPool.POP_DIALOG_TIP);
		LayerManager.addToLayer(popDialgoTips,LayerManager.TIP_LAYER,true);
	
	}

	
	

}