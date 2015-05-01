import BaseCheckboxGroup from '/Webiny/UI/Classes/CheckboxGroup/BaseCheckboxGroup';

class HorizontalCheckboxGroup extends BaseCheckboxGroup {

	getTemplate() {
		var Checkbox = this.getCheckboxComponent();
		return this.getReactTemplate();
	}
}

export default HorizontalCheckboxGroup;