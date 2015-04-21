class DeveloperTools {

	constructor() {
		this.componentActions = {};
		this.storeActionHandlers = {};
		this.map = [];
	}

	registerComponentActions(app, actions) {
		this.componentActions[app] = actions;
		Object.keys(actions).forEach(mName => {
			Object.keys(actions[mName]).forEach(cName => {
				actions[mName][cName].forEach(action => {
					this.addMap({
						source: `${app}.${mName}.${cName}`,
						target: action,
						sourceType: "component",
						targetType: "action"
					});
				});
			});
		});
	}

	registerStoreActionHandler(storeFqn, actionHandler) {
		var handlers = _.get(this.storeActionHandlers, storeFqn, []);
		handlers.push(actionHandler);
		_.set(this.storeActionHandlers, storeFqn, handlers);
	}

	addMap(map) {
		this.map.push(map);
	}

	getMap(stringify = false) {
		if (stringify) {
			console.log(JSON.stringify(this.map, null, 2));
		}
		return this.map;
	}
}
var dt = new DeveloperTools;
window['DTools'] = dt;
export default dt;