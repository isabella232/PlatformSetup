class DeveloperTools {

	constructor() {
		this.componentActions = {};
		this.storeActionHandlers = {};
	}

	registerComponentActions(app, actions) {
		this.componentActions[app] = actions;
	}

	registerStoreActionHandler(storeFqn, actionHandler) {
		var handlers = _.get(this.storeActionHandlers, storeFqn, []);
		handlers.push(actionHandler);
		_.set(this.storeActionHandlers, storeFqn, handlers);
	}
}
var dt = new DeveloperTools;
window['DTools'] = dt;
export default dt;