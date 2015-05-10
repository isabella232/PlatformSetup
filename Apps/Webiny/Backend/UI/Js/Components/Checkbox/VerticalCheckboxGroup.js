import BaseCheckboxGroup from 'Webiny/UI/Classes/CheckboxGroup/BaseCheckboxGroup';

class VerticalCheckboxGroup extends BaseCheckboxGroup {

	getTemplate() {
		var Checkbox = this.getCheckboxComponent();
		return this.getReactTemplate();
	}
}

export default VerticalCheckboxGroup;