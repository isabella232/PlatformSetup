import Base from 'Webiny/Core/Base';
import Tools from 'Webiny/Core/Tools/Tools';
import DeveloperTools from 'Webiny/Core/Tools/DeveloperTools';
import Action from 'Webiny/Core/Action';
import Api from 'Webiny/Core/Api';
import Http from 'Webiny/Core/Http';
import Router from 'Webiny/Core/Router/Router';
import EventManager from 'Webiny/Core/EventManager';
import ComponentLoader from 'Webiny/Core/Component/ComponentLoader';
import ComponentFactory from 'Webiny/Core/Component/ComponentFactory';

class Webiny {
	
	registerApp(app){
		new app();
	}

	/**
	 * Create React component (will instantiate given Webiny component class and call 'getComponent()')
	 *
	 * @returns {*}
	 */
	createComponent(component){
		return ComponentFactory.createComponent(new component);
	}

	/**
	 * Create react element from given component, props and inner content (children)
	 * @param component
	 * @param props
	 * @param content
	 * @returns {*}
	 */
	createElement(component, props = null, content = null){
		return React.createElement(component, props, content);
	}
}

var webiny = Object.assign(new Webiny(), {
	// Holds instances of all loaded apps
	Apps: {},
	Action: Action,
	// Base classes for developers
	Base: Base,
	// Holds Http related classes
	Http: Http,
	// Classes to work with API
	Api: Api,
	Router: Router,
	EventManager: EventManager,
	// Holds utility methods, eg: createUID(), keys(), classSet(), etc.
	Tools: Tools,
	ComponentLoader: ComponentLoader
});

export default webiny;