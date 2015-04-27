import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';
import HorizontalSwitchCmp from '/Webiny/UI/Components/HorizontalSwitch';
import VerticalSwitchCmp from '/Webiny/UI/Components/VerticalSwitch';
import SwitchButtonCmp from '/Webiny/UI/Components/SwitchButton';

var VerticalSwitch = VerticalSwitchCmp.createComponent();
var HorizontalSwitch = HorizontalSwitchCmp.createComponent();
var SwitchButton = SwitchButtonCmp.createComponent();

class Switch extends BaseInputComponent {

	getTemplate(){
		var formType = this.props._form ? this.props._form.getFormType() : 'blank';

		if(formType == 'vertical'){
			return this.createElement(VerticalSwitch, this.props);
		}

		if(formType == 'horizontal'){
			return this.createElement(HorizontalSwitch, this.props);
		}

		// Simple switch button
		return this.createElement(SwitchButton, this.props);
	}

	getDefaultProperties() {
		return {
			disabled: false,
			grid: 12
		};
	}
}

export default Switch;
