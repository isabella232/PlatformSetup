import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';

class VerticalCheckboxGroup extends BaseInputComponent {

	getDefaultProperties() {
		return {
			disabled: false,
			label: ''
		}
	}

	componentWillMount(){
		super.componentWillMount();
		this.inputRef = Tools.createUID();
	}

	getTemplate() {
		var checked = this.props.valueLink.value === true;
		return this.getReactTemplate();
	}

	onChange() {
		var input = this.getNode(this.inputRef);
		var checked = $(input).is(':checked');
		this.props.valueLink.requestChange(checked, this.props.bindChange || null);
	}

	getDOMElement() {
		console.log("Vertical checkbox group GET ELEMENT")
		return super.getDOMElement();
	}
}

export default VerticalCheckboxGroup;