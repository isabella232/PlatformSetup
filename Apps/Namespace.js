var Webiny = {
	// Holds instances of all loaded apps
	Apps: {
		Cms: {
			Components: {
				PagesList: '[native code]',
				PagesEditor: '[native code]'
			},
			Assets: '/web/path/'
		}
	},
	// Holds all core components that are exposed to developers
	Components: {
		Form: '[native code]',
		Input: '[native code]',
		CheckboxGroup: '[native code]',
		PrimaryButton: '[native code]',
		Grid12: '[native code]'
	},
	// Holds system stores
	Stores: {
		AppStore: '[native code]',
		GrowlsStore: '[native code]'
	},
	Actions: {
		ActionError: '[native code]',
		ActionResult: '[native code]'
	},
	// Base classes for developers
	Base: {
		Class: '[native code]',
		Component: '[native code]',
		FormComponent: '[native code]',
		InputComponent: '[native code]',
		Module: '[native code]',
		Store: '[native code]',
		EntityStore: '[native code]'
	},
	// Holds Http related classes
	Http: {
		Http: '[native code]', // wrapper class for easy request construction
		Request: '[native code]',
		Response: '[native code]'
	},
	// Classes to work with API
	Api: {
		Response: '[native code]',
		Service: '[native code]',
		EntityService: '[native code]'
	},
	Router: '[native code]',
	EventManager: '[native code]',
	// Holds utility methods, eg: createUID(), keys(), classSet(), etc.
	Tools: '[native code]'
};