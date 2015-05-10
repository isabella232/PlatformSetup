import Base from 'Webiny/Core/Base';
import Tools from 'Webiny/Core/Tools/Tools';
import DeveloperTools from 'Webiny/Core/Tools/DeveloperTools';
import Action from 'Webiny/Core/Action';
import Api from 'Webiny/Core/Api';
import Http from 'Webiny/Core/Http';
import Router from 'Webiny/Core/Router/Router';
import EventManager from 'Webiny/Core/EventManager';
import ComponentLoader from 'Webiny/Core/Component/ComponentLoader';

class Webiny {
	// Make it an empty class just to be flexible enough for future updates
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