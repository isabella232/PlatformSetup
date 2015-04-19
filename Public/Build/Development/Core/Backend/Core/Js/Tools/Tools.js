class Tools {

	createUID() {
		var delim = '-';

		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}

		return S4() + S4() + delim + S4() + delim + S4() + delim + S4() + delim + S4() + S4() + S4();
	}

	createPromise(data) {
		return Q.when(data).then((data) => {
			return data;
		});
	}


	keys(obj) {
		if (obj instanceof Array) {
			return [...obj.keys()];
		}
		return Object.keys(obj);
	}

	classSet(classObject) {
		var classes = '';

		if(!classObject){
			return classes;
		}

		if (typeof classObject === 'string'){
			return classObject;
		}

		this.keys(classObject).forEach(key => {
			var arg = classObject[key];
			if (!arg) {
				return;
			}

			classes += ' ' + key;
		});

		return classes.substr(1);
	}
}

export default new Tools;