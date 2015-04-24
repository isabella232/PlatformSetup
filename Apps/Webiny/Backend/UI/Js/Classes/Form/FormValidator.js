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

	parseValidators(component) {
		var validate = component.props.validate.split(',');
		var validators = {};
		validate.forEach(v => {
			var validator = v.split(':');
			var vName = validator.shift();
			validators[vName] = validator;
		});
		return validators;
	}

	validate(value, validators, messages) {
		for (var v in validators) {
			var args = _.clone(validators[v]);
			args.unshift(value);
			var result = this.getValidator(v).apply(null, args);
			if (!result.valid) {
				return {
					valid: false,
					message: messages[v] || result.message
				};
			}
		}
		return {valid: true};
	}
}

var formValidator = new FormValidator();

formValidator.addValidator('required', (value) => {
	return {
		valid: !(!value || value == ''),
		message: 'This field is required'
	};
});

formValidator.addValidator('minLength', (value, length) => {
	return {
		valid: value && value.length && value.length >= length,
		message: 'This field requires at least ' + length + ' characters'
	};
});

export default formValidator;