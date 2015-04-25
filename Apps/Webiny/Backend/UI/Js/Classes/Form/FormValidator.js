import FormValidationError from '/Webiny/UI/Classes/Form/FormValidationError';

class FormValidator {

	constructor() {
		this.validators = {};
	}

	addValidator(name, callable) {
		this.validators[name] = callable;
		return this;
	}

	getValidator(name) {
		return this.validators[name];
	}

	parseValidateProperty(validators) {
		if(!validators){
			return {};
		}
		var validate = validators.split(',');
		validators = {};
		validate.forEach(v => {
			var validator = v.split(':');
			var vName = validator.shift();
			validators[vName] = validator;
		});
		return validators;
	}

	parseCustomValidationMessages(elements){
		var customMessages = {};

		if (!elements) {
			return customMessages;
		}

		elements.forEach(item => {
			if (item.type == 'validator' && item.props.children) {
				customMessages[item.props.name] = item.props.children;
			}
		});
		return customMessages;
	}

	validate(value, validators) {
		var _this = this;
		var chain = Q({valid: true});
		Object.keys(validators).forEach(v => {
			var args = _.clone(validators[v]);
			args.unshift(value);
			chain = chain.then(function(){
				return _this.getValidator(v).apply(null, args);
			});
		});
		return chain;
	}
}

var formValidator = new FormValidator();

formValidator.addValidator('required', (value) => {
	if(!(!value || value == '')){
		return true;
	}
	throw new FormValidationError('This field is required', 'required');
});

formValidator.addValidator('minLength', (value, length) => {
	if(value.length && value.length >= length){
		return true;
	}
	throw new FormValidationError('This field requires at least ' + length + ' characters', 'minLength');
});

export default formValidator;