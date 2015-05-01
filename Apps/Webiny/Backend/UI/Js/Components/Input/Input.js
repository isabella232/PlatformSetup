import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import HorizontalInputCmp from '/Webiny/UI/Components/HorizontalInput';
import VerticalInputCmp from '/Webiny/UI/Components/VerticalInput';
import InlineInputCmp from '/Webiny/UI/Components/InlineInput';

var VerticalInput = VerticalInputCmp.createComponent();
var HorizontalInput = HorizontalInputCmp.createComponent();
var InlineInput = InlineInputCmp.createComponent();

class Input extends BaseComponent {

	getTemplate(){
		var formType = this.getFormType();

		if(formType == 'vertical'){
			return this.createElement(VerticalInput, this.props, this.props.children);
		}

		if(formType == 'horizontal'){
			return this.createElement(HorizontalInput, this.props, this.props.children);
		}

		if(formType == 'inline'){
			return this.createElement(InlineInput, this.props, this.props.children);
		}

		// Native input field
		return React.createElement('input', Object.assign({}, this.props, {className: 'form-control'}));
	}

	getDefaultProperties() {
		return {
			disabled: false,
			placeholder: '',
			grid: 12,
			name: null
		};
	}

	getFormType(defaultType = 'native'){
		return this.props._form ? this.props._form.getFormType() : defaultType;
	}
}

export default Input;
