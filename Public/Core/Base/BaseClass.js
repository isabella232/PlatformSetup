import Registry from '/Core/Registry';

class BaseClass {

	getClassName(){
		return this.__proto__.constructor.name;
	}

	getRegistry(){
		return Registry;
	}

	createElement(name, params = null, content = null){
		return React.createElement(name, params, content);
	}
}

export default BaseClass;