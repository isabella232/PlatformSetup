import BaseComponent from 'Webiny/Core/Base/BaseComponent';

class BaseInputComponent extends BaseComponent {

	getInitialState() {
		var state = {
			_isValid: true,
			_formSubmitted: false,
			_valid: null
		};

		_.set(state, 'css.' + 'col-sm-' + this.props.grid, true);

		return state;
	}

	getDefaultProperties() {
		return {
			grid: 12
		}
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

	getFormType(defaultType = 'native'){
		if(this.props.context){
			return this.props.context;
		}
		return this.props._form ? this.props._form.getFormType() : defaultType;
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

	/**
	 * This method is called when getDOM() method is called on an Input/Checkbox/etc component
	 * to get the actual input element that component represents and not the component DOM representation.
	 *
	 * Ex: <Input ref="firstName"/>
	 * Calling this.getDOM('firstName') from parent component will return the actual <input> element inside the component
	 *
	 * If getDOMElement() is not implemented, calling getDOM() will return the actual component DOM
	 *
	 * @returns {HTMLElement}
	 */
	getDOM() {
		return super.getDOM().querySelector('input');
	}
}

export default BaseInputComponent;