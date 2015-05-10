import BaseStore from 'Webiny/Core/Base/BaseStore';
import DeveloperTools from 'Webiny/Core/Tools/DeveloperTools';
import EntityApiService from 'Webiny/Core/Api/EntityService';

/**
 * Base class for all entity data stores
 */
class EntityStore extends BaseStore {

	constructor() {
		super();

		this.data = {};

		this.listViewComponent = null;
		this.formViewComponent = null;

		var service = this.getService();
		if (!service) {
			throw Error(`Entity store must have a service to work with!\nMake sure you define a service in getService() method of '${this.getFqn()}' store.`);
		}
		if (service instanceof EntityApiService) {
			this.api = service;
		} else {
			this.api = new EntityApiService(service);
		}
	}

	init() {
		this.data = [];
		var fqn = this.getFqn();
		fqn = _.trimRight(fqn, 'Store');
		var entityName = _.trimRight(this.getClassName(), 'Store');
		var actions = ['Create', 'Delete', 'Update', 'Restore'];
		actions.forEach(action => {
			var actionName = fqn + action;
			var callbackName = `on${entityName}${action}`;
			this[callbackName] = (data) => {
				return this['crud'+action](data);
			};
			this.onAction(actionName, callbackName);
		});
	}

	getService() {
		// Override to implement
		// return '/App/Module/Service'
		return null;
	}

	getApi(){
		return this.api;
	}

	getInitialData(){
		return this.crudList().then(response => {
			return response.getData().data;
		});
	}

	/**
	 * @param Object options filters, sorters, limit, page
	 * @returns {*}
	 */
	crudList(options = {}) {
		var defaultOptions = {
			filters: {},
			sorters: {},
			limit: 100,
			page: 1,
			emit: true,
			push: true
		};

		// Final config
		var config = {};

		// Merge default options with options from arguments
		Object.assign(config, defaultOptions, options);

		return this.api.crudList(config).then(apiResponse => {
			if (!apiResponse.isError()) {
				if (config.push) {
					// Unset all object properties but keep an object reference
					Object.keys(this.data).map((key) => {
						delete this.data[key];
					});

					// Assign response data to the original object reference
					Object.assign(this.data, apiResponse.getData().data);
				}

				if (config.emit) {
					this.emitChange();
				}
			}
			return apiResponse;
		});
	}

	/**
	 * Create record from given Object
	 *
	 * Creates a record by calling the API, and pushes the new record to this.data
	 * on success. This method also calls this.emitChange() for you.
	 *
	 * @param Object data Object data to create
	 * @returns Promise
	 */
	crudCreate(data, options = {}) {
		var defaultOptions = {
			prePush: true,
			postPush: false,
			emit: true
		};

		// Final config
		var config = {};

		// Merge default options with options from arguments
		Object.assign(config, defaultOptions, options);

		// Disable prePush if postPush is set in the options
		if (options.postPush) {
			config.prePush = false;
		}

		if (config.prePush) {
			config.postPush = false;
			this.data.push(data);
			this.emitChange();
		}

		return this.api.crudCreate(data).then(apiResponse => {
			if (apiResponse.isError()) {
				return apiResponse;
			}
			// Unset all object properties but keep an object reference
			Object.keys(data).map((key) => {
				delete data[key];
			});

			// Assign response data to the original object reference
			Object.assign(data, apiResponse.getData());

			if (config.postPush) {
				this.data.push(data);
			}

			if (config.emit) {
				this.emitChange();
			}
			return apiResponse;
		});
	}

	/**
	 * Delete record by given record object or ID
	 * @param Object|number data Object or index to delete
	 * @returns Promise
	 */
	crudDelete(data, options = {}) {
		var id = data instanceof Object ? data.id : data;
		var itemIndex = false;
		this.data.forEach((d, index) => {
			if(id == d.id){
				itemIndex = index;
			}
		});

		var defaultOptions = {
			remove: true,
			emit: true
		};

		// Final config
		var config = {};

		// Merge default options with options from arguments
		Object.assign(config, defaultOptions, options);


		if (config.remove && itemIndex) {
			this.data.splice(itemIndex, 1);
		}

		if (config.emit) {
			this.emitChange();
		}

		return this.api.crudDelete(id);
	}

	crudGet(id) {
		var id = id instanceof Object ? id.id : id;
		return this.api.crudGet(id);
	}

	crudRestore(data) {
		var id = data instanceof Object ?  data.id : data;
		return this.api.crudRestore(id).then(apiResponse => {
			if (!apiResponse.isError()) {
				this.data.push(apiResponse.getData());
				this.emitChange();
			}
			return apiResponse;
		});
	}

	crudUpdate(id, data) {
		if (id instanceof Object) {
			data = id;
			id = id.id;
		}

		return this.api.crudUpdate(id, data).then(apiResponse => {
			if (!apiResponse.isError()) {
				this.getData().then(storeData => {
					storeData.forEach((item, index) => {
						if (item.id == id) {
							Object.assign(this.data[index], data);
							this.emitChange();
						}
					});
				});
			}
			return apiResponse;
		});
	}

	setListView(component) {
		this.listViewComponent = component;
		return this;
	}

	setFormView(component) {
		this.formViewComponent = component;
		return this;
	}

	getListView() {
		return this.listViewComponent;
	}

	getFormView() {
		return this.formViewComponent;
	}
}

export default EntityStore;