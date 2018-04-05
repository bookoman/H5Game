class SceneManager {
	//场景
	public static LOGIN_SCENE:Number = 1;
	public static GAME_SCENE:Number = 2;

	public static curScene = null;
	public constructor() {

	}
	
	public static enter(type:Number):void
	{
		if(this.curScene)
		{
			this.curScene.leave();
			this.curScene = null;
		}
		switch(type)
		{
			case this.LOGIN_SCENE:
				let loginView = new LoginViewMediator();
				this.curScene = new LoginScene(loginView,LayerManager.PLAYER_LAYER);
				this.curScene.enter();
				break;
			case this.GAME_SCENE:
				var gameScene = new GameSceneViewMediator();
				this.curScene = new GameScene(gameScene,LayerManager.PLAYER_LAYER);
				this.curScene.enter();
				break;
		}
	}
}