import BaseStore from '/Core/Core/Base/BaseStore';

class AppStore extends BaseStore {

	getFqn() {
		return 'Core.Layout.AppStore';
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