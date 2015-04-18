import BaseComponent from '/Core/Core/Base/BaseComponent';

class Checkbox extends BaseComponent {

	getInitialState() {
		return {
			ref: Tools.createUID()
		};
	}

	getDefaultProperties() {
		return {
			disabled: false,
			label: ''
		}
	}

	getTemplate() {
		var checked = this.props.valueLink.value === true;
		return this.getReactTemplate();
	}

	onChange() {
		var el = this.getNode(this.state.ref);
		var checked = $(el).is(':checked');
		this.props.valueLink.requestChange(checked, this.props.bindChange || null);
	}
}

export default Checkbox;