import EventManager from '/Webiny/Core/EventManager';
import Router from '/Webiny/Core/Router/Router';
import BaseClass from '/Webiny/Core/Base/BaseClass';
import Tools from '/Webiny/Core/Tools/Tools';
import ApiService from '/Webiny/Core/Api/ApiService';
import ApiResponse from '/Webiny/Core/Api/ApiResponse';
import DeveloperTools from '/Webiny/Core/Tools/DeveloperTools';

/**
 * Base class for all data stores
 */
class BaseStore extends BaseClass {

	init() {
		// Override to implement initial setup code
	}

	emitChange(delay = false) {
		setTimeout(() => {
			this.getData().then(data => {
				EventManager.emit(this.getFqn(), data);
			});
		}, delay);
	}

	setInitialData(data) {
		// Unset all object properties but keep an object reference
		Object.keys(this.data).map((key) => {
			delete this.data[key];
		});

		// Assign response data to the original object reference
		Object.assign(this.data, data);
		this.emitChange();
		return this;
	}

	getInitialData() {
		return Q.when(null);
	}

	onAction(action, callback) {
		var callbackFn = typeof callback == 'string' ? this[callback] : callback;
		var callbackName = typeof callback == 'string' ? callback : 'callable';

		/*DeveloperTools.registerStoreActionHandler(this.getFqn(), {
			action: action,
			handler: callbackName,
			listenerType: 'store',
			listeningTo: 'action',
			listenerName: this.getFqn()
		});*/

		DeveloperTools.addMap({
			source: action,
			target: this.getFqn(),
			sourceType: "action",
			targetType: "store"
		});

		EventManager.addListener(action, callbackFn.bind(this));
	}

	onStore(store, callback) {
		EventManager.addListener(store, callback);
	}

	getData(conditions = null) {
		if (!conditions) {
			return Tools.createPromise(this.data);
		}

		if (!conditions instanceof Object) {
			throw new Error('Conditions must be in form of an Object! ' + typeof conditions + ' given.');
		}

		if (this.data instanceof Array) {
			return Tools.createPromise(DataFilter.filter(this.data, conditions));
		}

		return Tools.createPromise(null);
	}

	/**
	 * Get router parameter
	 * @param name
	 * @returns String|null
	 */
	getParam(name) {
		return Router.getParam(name);
	}
}


/**
 * DataFilter class is used only for filtering given data objects by given conditions
 */
class DataFilter {

	filter(data, conditions) {
		var results = [];
		data.forEach((item) => {
			var matches = 0;

			Object.keys(conditions).forEach((key) => {
				if (item[key] == conditions[value]) {
					matches++;
				}
			});

			if (matches == Object.keys(conditions).length) {
				results.push(item);
			}
		});
		return results;
	}
}

export default BaseStore;