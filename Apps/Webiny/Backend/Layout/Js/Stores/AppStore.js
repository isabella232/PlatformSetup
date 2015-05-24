class AppStore extends Webiny.Base.Store {

	getFqn() {
		return 'Webiny.Layout.AppStore';
	}

	getInitialData(){
		return Q.when({
			developerMode: false
		});
	}

	init() {
		this.data = {};
		this.onAction('App.ToggleDeveloperMode', (mode) => {
			this.data.developerMode = mode;
			this.emitChange();
		});
	}
}

export default AppStore;