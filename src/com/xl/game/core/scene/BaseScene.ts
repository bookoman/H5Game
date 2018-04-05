class BaseScene {
	private view:egret.DisplayObject;
	private layerId:number;
	public constructor(v:egret.DisplayObject,lID:number) {
		this.view = v;
		this.layerId = lID;
	}
	protected enter():void
	{
		if(this.view && this.layerId)
		{
			LayerManager.addToLayer(this.view,this.layerId,false,0);
		}
	}
	protected leave():void
	{
		if(this.view && this.layerId)
		{
			LayerManager.removeFromLayer(this.view,this.layerId);
		}
	}
}