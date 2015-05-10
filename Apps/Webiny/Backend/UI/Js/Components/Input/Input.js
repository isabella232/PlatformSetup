import BaseFormComponent from 'Webiny/Core/Base/BaseFormComponent';
import HorizontalInputCmp from 'Webiny/UI/Components/HorizontalInput';
import VerticalInputCmp from 'Webiny/UI/Components/VerticalInput';
import InlineInputCmp from 'Webiny/UI/Components/InlineInput';
import Tools from 'Webiny/Core/Tools/Tools';

var VerticalInput = VerticalInputCmp.createComponent();
var HorizontalInput = HorizontalInputCmp.createComponent();
var InlineInput = InlineInputCmp.createComponent();

class Input extends BaseFormComponent {

	componentWillMount(){
		super.componentWillMount();
		this.inputRef = Tools.createUID();
	}
	
	getTemplate(){
		var formType = super.getFormType();

		var props = _.clone(this.props);
		props['ref'] = this.inputRef;

		if(formType == 'vertical'){
			return this.createElement(VerticalInput, props, this.props.children);
		}

		if(formType == 'horizontal'){
			return this.createElement(HorizontalInput, props, this.props.children);
		}

		if(formType == 'inline'){
			return this.createElement(InlineInput, props, this.props.children);
		}

		// Native input field
		return React.createElement('input', Object.assign({}, props, {className: 'form-control'}));
	}

	getDefaultProperties() {
		return {
			disabled: false,
			placeholder: '',
			grid: 12,
			name: null
		};
	}

	getDOM() {
		return super.getDOM(this.inputRef);
	}
}

export default Input;
