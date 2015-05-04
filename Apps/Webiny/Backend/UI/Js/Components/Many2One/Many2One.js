import BaseFormComponent from '/Webiny/Core/Base/BaseFormComponent';
import VerticalMany2OneCmp from '/Webiny/UI/Components/VerticalMany2One';

var VerticalMany2One = VerticalMany2OneCmp.createComponent();

class Many2One extends BaseFormComponent {

	componentWillMount(){
		super.componentWillMount();
		this.inputRef = Tools.createUID();
	}

	getTemplate(){
		var formType = this.getFormType();

		var props = _.clone(this.props);
		props['ref'] = this.inputRef;

		if(formType == 'vertical'){
			return this.createElement(VerticalMany2One, props, this.props.children);
		}

		return null;
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

export default Many2One;
