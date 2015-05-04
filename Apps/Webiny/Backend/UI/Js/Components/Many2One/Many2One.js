import BaseFormComponent from '/Webiny/Core/Base/BaseComponent';
import VerticalMany2OneCmp from '/Webiny/UI/Components/VerticalMany2One';

var VerticalMany2One = VerticalMany2One.createComponent();

class Many2One extends BaseFormComponent {

	getTemplate(){
		var formType = this.getFormType();

		if(formType == 'vertical'){
			return this.createElement(VerticalMany2One, this.props, this.props.children);
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
}

export default Many2One;
