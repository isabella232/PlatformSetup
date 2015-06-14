import HorizontalSwitchCmp from 'Webiny/UI/Components/HorizontalSwitch';
import VerticalSwitchCmp from 'Webiny/UI/Components/VerticalSwitch';
import SwitchButtonCmp from 'Webiny/UI/Components/SwitchButton';

var VerticalSwitch = Webiny.createComponent(VerticalSwitchCmp);
var HorizontalSwitch = Webiny.createComponent(HorizontalSwitchCmp);
var SwitchButton = Webiny.createComponent(SwitchButtonCmp);

class Switch extends Webiny.Base.InputComponent {

	getTemplate(){
		var formType = this.props._form ? this.props._form.getFormType() : 'blank';

		if(formType == 'vertical'){
			return Webiny.createElement(VerticalSwitch, this.props);
		}

		if(formType == 'horizontal'){
			return Webiny.createElement(HorizontalSwitch, this.props);
		}

		// Simple switch button
		return Webiny.createElement(SwitchButton, this.props);
	}

	getDefaultProperties() {
		return {
			disabled: false,
			grid: 12
		};
	}
}

export default Switch;
