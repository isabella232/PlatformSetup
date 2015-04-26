import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import FormValidator from '/Webiny/UI/Classes/Form/FormValidator';
import FormInput from '/Webiny/UI/Components/FormInput';

class Form extends BaseComponent {

	getFormType(){
		return 'vertical';
	}

	getTemplate() {
		return '<form {...this.props} ref={this.props.name}>{this.registerInputs(this.props.children)}</form>';
	}

	componentWillMount() {
		this.inputs = {};
	}

	componentDidMount() {
		// Disable form submission
		var form = this.getNode(this.props.name);
		$(form).submit(function (e) {
			e.preventDefault();
		});
	}

	isFormDisabled() {
		return this.props.disabled;
	}

	registerInputs(children) {
		if (typeof children !== 'object' || children === null) {
			return children;
		}
		return React.Children.map(children, function (child) {

			if (typeof child !== 'object' || child === null) {
				return child;
			}

			if (child.props && child.props.validate && child.props.name) {

				return React.cloneElement(child, {
					_attachToForm: this.attachToForm,
					_detachFromForm: this.detachFromForm,
					_updateModel: this.updateModel,
					_isFormDisabled: this.isFormDisabled,
					_validate: this.validate,
					_form: this
				}, child.props && child.props.children);
			}
			return React.cloneElement(child, {_form: this}, this.registerInputs(child.props && child.props.children));

		}, this);
	}

	attachToForm(component) {
		this.inputs[component.props.name] = {
			component: component,
			model: component.getValue(),
			validators: FormValidator.parseValidateProperty(component.props.validate),
			messages: FormValidator.parseCustomValidationMessages(component.props.children)
		};
	}

	detachFromForm(component) {
		delete this.inputs[component.props.name];
	}

	updateModel(component) {
		var validators = this.inputs[component.props.name].validators;
		var messages = this.inputs[component.props.name].messages;
		// Validate input
		return Q(FormValidator.validate(component.getValue(), validators, messages)).then(res => {
			this.inputs[component.props.name].model = component.getValue();
			return res;
		}).catch(validationError => {
			// Set custom error message if defined
			var validator = validationError.validator;
			if(validator in messages){
				validationError.setMessage(messages[validator]);
			}
			throw validationError;
		});
	}
}

export default Form;