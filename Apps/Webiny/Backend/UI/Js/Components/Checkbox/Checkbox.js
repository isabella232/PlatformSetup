import BaseInputComponent from 'Webiny/Core/Base/BaseInputComponent';
import Tools from 'Webiny/Core/Tools/Tools';

class Checkbox extends BaseInputComponent {

	componentWillMount() {
		super.componentWillMount();
		this.id = Tools.createUID();
	}

	getDefaultProperties() {
		return {
			disabled: false,
			label: '',
			grid: 3
		}
	}

	getTemplate() {
		var id = this.id;
		var checked = this.props.valueLink.value === true;
		return this.getReactTemplate();
	}

	onChange() {
		var el = this.getDOM();
		var checked = $(el).is(':checked');
		this.props.valueLink.requestChange(checked, this.props.bindChange || null);
	}
}

export default Checkbox;