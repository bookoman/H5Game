class LoginViewMediator extends eui.Component{
	
	private inputAccount:eui.EditableText;
	private inputPwd:eui.TextInput;
	private btnLogin:eui.Button;

	public constructor() {
		super();
		this.skinName = "resource/skins/LoginViewSkin.exml";
	}

	protected childrenCreated():void{
		this.addEvents();
	}

	private addEvents():void{
		this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLoginTouch,this);
	}

	private onLoginTouch(e:egret.TouchEvent):void{
		SceneManager.enter(SceneManager.GAME_SCENE);
		
	}
}