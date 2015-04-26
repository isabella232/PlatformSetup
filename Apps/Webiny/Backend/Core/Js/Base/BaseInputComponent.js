import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class BaseInputComponent extends BaseComponent {

	getInitialState() {
		return {
			_isValid: true,
			_formSubmitted: false
		};
	}

	componentWillMount() {
		if (this.props._attachToForm) {
			this.props._attachToForm(this);
		}
	}

	componentWillUnmount() {
		if (this.props._detachFromForm) {
			this.props._detachFromForm(this);
		}
	}

	validate(){
		Q.when(this.props._updateModel(this)).then(() => {
			this.setState({_valid: true});
		}).catch(validationError => {
			this.setState({
				_valid: false,
				_validationError: validationError.message
			});
		});
	}

	getValue() {
		return this.props.valueLink.value;
	}

	hasValue() {
		return this.props.valueLink.value !== '';
	}

	isFormDisabled() {
		return this.props._isFormDisabled();
	}

	isFormSubmitted() {
		return this.state._formSubmitted;
	}
}

export default BaseInputComponent;