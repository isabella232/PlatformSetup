import EventManager from 'Webiny/Core/EventManager'
import BaseClass from 'Webiny/Core/Base/BaseClass'
import BaseStore from 'Webiny/Core/Base/BaseStore'
import Router from 'Webiny/Core/Router/Router'
import Route from 'Webiny/Core/Router/Route'

class BaseModule extends BaseClass {

	constructor() {
		super();

		this.components = {};

		this.registerStores().forEach((store) => {
			if(store instanceof BaseStore){
				this.getRegistry().addStore(store, {initialized: false});
			} else {
				var storeInstance = new store;
				this.getRegistry().addStore(storeInstance, {initialized: false});
			}
		});

		var components = this.registerComponents();
		Object.keys(components).forEach(name => {
			var component = components[name];
			if (window.hasOwnProperty(name)) {
				throw Error('Component with name `' + name + '` is already registered!');
			}
			this.components[name] = Webiny.createComponent(component);
		});

		var routes = this.registerRoutes();
		Object.keys(routes).forEach(function (routeName) {
			var routeData = routes[routeName];
			var placeholders = routeData['Content'];
			var path = '/' + _backendPrefix + routeData['Path'];
			routeData['Path'] = path;
			Router.addRoute(routeName, new Route(path));
			Object.keys(placeholders).forEach(function (placeholder) {
				var component = placeholders[placeholder];
				var eventHash = md5(path + placeholder);
				var meta = {
					listenerType: 'route',
					placeholder: placeholder,
					route: path
				};
				EventManager.addListener(eventHash, () => {
					return component;
				}, meta)
			});
		});
	}

	registerComponents() {
		return {};
	}

	registerRoutes() {
		return {};
	}

	registerStores() {
		return [];
	}

	getComponents(){
		return this.components;
	}
}

export default BaseModule;