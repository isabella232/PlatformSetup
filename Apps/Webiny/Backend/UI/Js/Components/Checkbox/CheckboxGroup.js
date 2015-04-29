import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';
import VerticalCheckboxGroupCmp from '/Webiny/UI/Components/VerticalCheckboxGroup';

var VerticalCheckboxGroup = VerticalCheckboxGroupCmp.createComponent();

class CheckboxGroup extends BaseInputComponent {

	getTemplate(){
		var formType = this.getFormType();

		if(formType == 'vertical'){
			return this.createElement(VerticalCheckboxGroup, this.props, this.props.children);
		}

		return null;
	}
}

export default CheckboxGroup;