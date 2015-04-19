import BaseComponent from '/Core/Core/Base/BaseComponent';

class Checkbox extends BaseComponent {

	getFqn(){
		return 'Core.UI.Checkbox';
	}

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
		return React.createElement("div", {className: "col-sm-offset-2 col-sm-10"},     React.createElement("div", {className: Tools.classSet({icheckbox_minimal: true, disabled: this.props.disabled, checked: checked})},         React.createElement("input", {id: this.state.ref, type: "checkbox", ref: this.state.ref, onChange: this.onChange, checked: checked, className: "radio"})    ),     React.createElement("label", {htmlFor: this.state.ref, className: "cb-label"}, this.props.label));
	}

	onChange() {
		var el = this.getNode(this.state.ref);
		var checked = $(el).is(':checked');
		this.props.valueLink.requestChange(checked, this.props.bindChange || null);
	}
}

export default Checkbox;