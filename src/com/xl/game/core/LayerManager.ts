
class LayerManager {
	public static BACKGROUND_LAYER:number = 1;
	public static PLAYER_LAYER:number = 2;
	public static UI_LAYER:number = 3;
	public static TIP_LAYER:number = 4;
	//层次
	public static backgroundLayer:MyLayer = null;
	public static playerLayer:MyLayer = null;
	public static uiLayer:MyLayer = null;
	public static tipLayer:MyLayer = null;

	public constructor() {

	}
	public static init(main:Main):void
	{
		this.backgroundLayer = new MyLayer();
		main.stage.addChild(this.backgroundLayer);
		
		this.playerLayer = new MyLayer();
		main.stage.addChild(this.playerLayer);

		this.uiLayer = new MyLayer();
		main.stage.addChild(this.uiLayer);

		this.tipLayer = new MyLayer();
		main.stage.addChild(this.tipLayer);
	}

	public static addToLayer(view:egret.DisplayObject,layerId:number,isShowMultiple:boolean = false,bgMaskId:number = 0,isAutoCenter:boolean = true):void{
		var myLayer = this.getLayer(layerId);
		if(myLayer)
		{
			myLayer.add(view,isShowMultiple,bgMaskId,isAutoCenter);
		}
	}

	public static removeFromLayer(view:egret.DisplayObject,layerId:number,isShowMultiple:boolean = false,bgMaskId:number = 0):void
	{
		
		var myLayer = this.getLayer(layerId);
		if(myLayer)
		{
			myLayer.remove(view,isShowMultiple,bgMaskId);
		}
	}

	public static getLayer(layerId:Number):MyLayer{
		switch(layerId)
		{
			case this.BACKGROUND_LAYER:
				return this.backgroundLayer;
			case this.PLAYER_LAYER:
				return this.playerLayer;
			case this.UI_LAYER:
				return this.uiLayer;
			case this.TIP_LAYER:
				return this.tipLayer;
		}
	}
}
 
class MyLayer extends egret.Sprite{
	//蒙版遮罩
	private bgMask:egret.Sprite = null;
	private bgMaskCount:number = 0;
	private curView:egret.DisplayObject;
	private viewObjcet = null;
	public constructor() {
		super();
		this.viewObjcet = {};
	}

	public add(view,isShowMultiple:boolean = false,bgMaskId:number = 0,isAutoCenter:boolean = true):void
	{
		if(isShowMultiple)
		{	
			var viewKey:string = view.constructor.name;
			var views = this.viewObjcet[viewKey];
			if(views)
			{
				views.push(view);
			}
			else
			{
				this.viewObjcet[viewKey] = [];
				this.viewObjcet[viewKey].push(view);
			}
		}
		else
		{
			if(this.curView)
			{
				this.remove(this.curView);
				this.curView = null;
			}
		}
		if(bgMaskId > 0)
		{
			if(this.bgMask == null)
			{
				this.bgMask = new egret.Sprite();
			}
			if(!this.bgMask.parent)
			{
				this.bgMask.graphics.beginFill(0x5d5d5d,0.5);
				this.bgMask.graphics.drawRect(0,0,GameConfig.GAME_STAGE_WIDTH,GameConfig.GAME_STAGE_HEIGHT);
				this.bgMask.graphics.endFill();
				this.addChild(this.bgMask);
			}
			this.bgMaskCount++;
		}
		else
		{
			if(this.bgMask){
				if(this.bgMask.parent)
				{
					this.bgMask.parent.removeChild(this.bgMask);
				}
				this.bgMask.graphics.clear();
				this.bgMask = null;
			}
		}
		if(isAutoCenter)
		{
			view.x = GameConfig.GAME_STAGE_WIDTH - view.width >> 1;
			view.y = GameConfig.GAME_STAGE_HEIGHT - view.height >> 1;
		}
		this.curView = view;
		this.addChild(view);
		console.log(this.numChildren);
	}

	public remove(view,isShowMultiple:boolean = false,bgMaskId:number = 0):void
	{
		if(bgMaskId > 0 && this.bgMask && this.bgMask.parent)
		{
			this.bgMaskCount--;
			if(this.bgMaskCount <= 0)
			{
				this.bgMaskCount = 0;
				this.bgMask.parent.removeChild(this.bgMask);
				this.bgMask.graphics.clear();
				this.bgMask = null;
			}
		}
		if(isShowMultiple)
		{
			var views = this.viewObjcet[view.constructor.name];
			if(views)
			{
				views.pop();
			}
		}
		if(view.parent)
		{
			view.parent.removeChild(view);
		}
	}
}