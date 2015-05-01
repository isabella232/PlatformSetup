var TraceurLoader = traceur.runtime.TraceurLoader;
var webLoader = traceur.runtime.webLoader;

class SystemLoader extends TraceurLoader {
	constructor() {
		super(webLoader, window.location.href);
		this.regex = /\/([\w+]*)\/([\w+]*)\/([\w+\/]*)/;
		this.appRegex = /\/([\w+]*)\/([\w+]*)/;
	}

	normalize(name, referrerName, referrerAddress) {
		// If it's a request for /Assets - return it as is
		if (name.indexOf('/Assets') == 0) {
			return super.normalize(name, referrerName, referrerAddress);
		}

		// All modules are loaded from /Build folder
		var matches = name.match(this.regex);
		if (matches && matches.length == 4) {
			return name.replace(this.regex, '/Build/Development/$1/Backend/$2/Js/$3');
		}

		// Check if it's a request for App bootstrap file
		matches = name.match(this.appRegex);
		if (matches && matches.length == 3) {
			return name.replace(this.appRegex, '/Build/Development/$1/Backend/$2');
		}

		return super.normalize(name, referrerName, referrerAddress);
	}

	import(name) {
		return super.import(name).catch(e => {
			console.error(name, e.message);
			console.log(e);
		});
	}
}

export default SystemLoader;