import Registry from 'Webiny/Core/Registry';

class BaseClass {

	getClassName(){
		return this.__proto__.constructor.name;
	}

	getRegistry(){
		return Registry;
	}
}

export default BaseClass;