class ObjectPool {
	/**对象池对象 */
	public static POP_DIALOG_TIP:string = "popDialogTip";


	/**弹框tips */
	public static popDialogTipAry:Array<PopDialogTip> = null;

	public constructor() {
	}

	public static init():void{
		var i = 0;
		this.popDialogTipAry = new Array<PopDialogTip>();
		for(i = 0; i < 10;i++)
		{
			this.popDialogTipAry.push(new PopDialogTip());
		}
	}
	/**借用对象 */
	public static borrowObeject(property:string)
	{
		var objectAry = this[property+"Ary"];
		console.log("借用后还剩多少个+PopDialogTip" + objectAry.length);
		return objectAry.pop();
	}
	/**还对象 */
	public static stillObject(property:string,object):void
	{
		var objectAry = this[property+"Ary"];
		objectAry.push(object);
		console.log("还后还剩多少个+PopDialogTip" + objectAry.length);
	}

}