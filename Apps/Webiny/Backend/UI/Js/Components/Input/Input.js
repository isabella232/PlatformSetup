import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';
import HorizontalInputCmp from '/Webiny/UI/Components/HorizontalInput';
import VerticalInputCmp from '/Webiny/UI/Components/VerticalInput';
import InlineInputCmp from '/Webiny/UI/Components/InlineInput';

var VerticalInput = VerticalInputCmp.createComponent();
var HorizontalInput = HorizontalInputCmp.createComponent();
var InlineInput = InlineInputCmp.createComponent();

class Input extends BaseInputComponent {

	getTemplate(){
		var formType = this.getFormType();

		if(formType == 'vertical'){
			return this.createElement(VerticalInput, this.props);
		}

		if(formType == 'horizontal'){
			return this.createElement(HorizontalInput, this.props);
		}

		if(formType == 'inline'){
			return this.createElement(InlineInput, this.props);
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
}

export default Input;
