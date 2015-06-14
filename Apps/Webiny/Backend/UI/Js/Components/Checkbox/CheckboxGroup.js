import VerticalCheckboxGroupCmp from 'Webiny/UI/Components/VerticalCheckboxGroup';
import HorizontalCheckboxGroupCmp from 'Webiny/UI/Components/HorizontalCheckboxGroup';

var VerticalCheckboxGroup = Webiny.createComponent(VerticalCheckboxGroupCmp);
var HorizontalCheckboxGroup = Webiny.createComponent(HorizontalCheckboxGroupCmp);

class CheckboxGroup extends Webiny.Base.FormComponent {

	componentWillMount(){
		super.componentWillMount();
		this.checkboxRef = Webiny.Tools.createUID();
	}

	/**
	 * Based on form type, return the correct checkbox group component: VerticalCheckboxGroup, HorizontalCheckboxGroup or plain checkbox
	 * @returns {*}
	 */
	getTemplate(){
		var formType = this.getFormType();
		
		var props = _.clone(this.props);
		props['ref'] = this.checkboxRef;

		if(formType == 'vertical'){
			return Webiny.createElement(VerticalCheckboxGroup, props, this.props.children);
		}

		if(formType == 'horizontal'){
			return Webiny.createElement(HorizontalCheckboxGroup, props, this.props.children);
		}
		
		return null;
	}

	getDOM() {
		return super.getDOM(this.checkboxRef);
	}
}

export default CheckboxGroup;