import HorizontalInputCmp from 'Webiny/UI/Components/HorizontalInput';
import VerticalInputCmp from 'Webiny/UI/Components/VerticalInput';
import InlineInputCmp from 'Webiny/UI/Components/InlineInput';

var VerticalInput = VerticalInputCmp.createComponent();
var HorizontalInput = HorizontalInputCmp.createComponent();
var InlineInput = InlineInputCmp.createComponent();

class Input extends Webiny.Base.FormComponent {

	componentWillMount(){
		super.componentWillMount();
		this.inputRef = Webiny.Tools.createUID();
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
