import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import FormValidator from '/Webiny/UI/Classes/Form/FormValidator';

class Form extends BaseComponent {

	getTemplate() {
		var classes = this.props.className || '';

		if (classes instanceof Object) {
			classes = this.classSet(classes);
		}

		return '<form name={this.props.name} ref={this.props.name} class={classes}>{this.registerInputs(this.props.children)}</form>';
	}

	componentWillMount() {
		this.inputs = {};
		this.model = {};
	}

	componentDidMount() {
		// Disable form submission
		var form = this.getNode(this.props.name);
		$(form).submit(function (e) {
			e.preventDefault();
		});
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
					_validate: this.validate
				}, child.props && child.props.children);
			} else {
				return React.cloneElement(child, {}, this.registerInputs(child.props && child.props.children));
			}

		}, this);
	}

	// Method put on each input component to register itself to the form
	attachToForm(component, customMessages = {}) {
		this.inputs[component.props.name] = {
			component: component,
			validators: FormValidator.parseValidators(component),
			messages: customMessages
		};
		this.model[component.props.name] = component.props.valueLink.value;
	}

	// Method put on each input component to unregister itself from the form
	detachFromForm(component) {
		delete this.inputs[component.props.name];
		delete this.model[component.props.name];
	}

	// Method put on each input component to update it's model when componentDidUpdate() is triggerred
	updateModel(component) {
		this.model[component.props.name] = component.props.valueLink.value;
	}

	validate(component) {
		return FormValidator.validate(
			component.props.valueLink.value,
			this.inputs[component.props.name].validators,
			this.inputs[component.props.name].messages
		);
	}
}

export default Form;
