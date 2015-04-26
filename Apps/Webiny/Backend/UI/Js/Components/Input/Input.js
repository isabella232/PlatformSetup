import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';

class Input extends BaseInputComponent {

	getTemplate(){
		var formType = this.props._form ? this.props._form.getFormType() : 'blank';
		var onBlur = this.props.validate ? this.validate : null;

		if(formType == 'vertical'){
			return this.getReactTemplate('VerticalInput');
		}

		if(formType == 'horizontal'){
			return this.getReactTemplate('HorizontalInput');
		}

		return '<input {...this.props} class="form-control"/>';
	}

	getInitialState() {
		var state = {
			_valid: null
		};
		_.set(state, 'css.' + 'col-sm-' + this.props.grid, true);
		return state;
	}

	/**
	 * This method is called when getNode() method is called on an Input/Checkbox/etc component
	 * to get the actual input element that component represents and not the component DOM representation.
	 *
	 * Ex: <Input ref="firstName"/>
	 * Calling this.getNode('firstName') from parent component will return the actual <input> element inside the component
	 *
	 * If getDOMElement() is not implemented, calling getNode() will return the actual component DOM will be returned by default.
	 *
	 * @returns {HTMLElement}
	 */
	getDOMElement() {
		return React.findDOMNode(this).querySelector('input');
	}

	getDefaultProperties() {
		return {
			disabled: false,
			placeholder: '',
			grid: 12,
			name: null
		};
	}
}

export default Input;
