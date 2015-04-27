import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';
import HorizontalInputCmp from '/Webiny/UI/Components/HorizontalInput';
import VerticalInputCmp from '/Webiny/UI/Components/VerticalInput';

var VerticalInput = VerticalInputCmp.createComponent();
var HorizontalInput = HorizontalInputCmp.createComponent();

class Input extends BaseInputComponent {

	getTemplate(){
		var formType = this.props._form ? this.props._form.getFormType() : 'blank';

		if(formType == 'vertical'){
			return this.createElement(VerticalInput, this.props);
		}

		if(formType == 'horizontal'){
			return this.createElement(HorizontalInput, this.props);
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
