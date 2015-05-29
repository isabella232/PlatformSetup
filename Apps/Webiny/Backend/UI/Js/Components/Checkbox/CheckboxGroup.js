import VerticalCheckboxGroupCmp from 'Webiny/UI/Components/VerticalCheckboxGroup';
import HorizontalCheckboxGroupCmp from 'Webiny/UI/Components/HorizontalCheckboxGroup';

var VerticalCheckboxGroup = VerticalCheckboxGroupCmp.createComponent();
var HorizontalCheckboxGroup = HorizontalCheckboxGroupCmp.createComponent();

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
			return this.createElement(VerticalCheckboxGroup, props, this.props.children);
		}

		if(formType == 'horizontal'){
			return this.createElement(HorizontalCheckboxGroup, props, this.props.children);
		}
		
		return null;
	}

	getDOM() {
		return super.getDOM(this.checkboxRef);
	}
}

export default CheckboxGroup;