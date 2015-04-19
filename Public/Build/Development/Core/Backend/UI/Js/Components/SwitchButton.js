import BaseComponent from '/Core/Core/Base/BaseComponent';

class SwitchButton extends BaseComponent {

	getFqn(){
		return 'Core.UI.SwitchButton';
	}

	getInitialState(){
		return {
			ref: Tools.createUID()
		};
	}

	getTemplate() {
		var buttons = {
			on: 'ON',
			off: 'OFF'
		};

		if(this.props.buttons){
			var tmp = this.props.buttons.split('|');
			buttons['on'] = tmp[0];
			buttons['off'] = tmp[1];
		}
		var checked = this.props.valueLink.value === true;
		var classes = {
			'bootstrap-switch': true,
			'bootstrap-switch-wrapper': true,
			'bootstrap-switch-animate': true,
			'bootstrap-switch-off': !checked,
			'bootstrap-switch-on': checked
		};

		return React.createElement("div", {className: Tools.classSet(classes)},     React.createElement("div", {className: "bootstrap-switch-container"},         React.createElement("span", {className: "bootstrap-switch-handle-on bootstrap-switch-primary"}, buttons.on),         React.createElement("label", {className: "bootstrap-switch-label", onClick: this.switch}, " "),         React.createElement("span", {className: "bootstrap-switch-handle-off bootstrap-switch-default"}, buttons.off)    ),     React.createElement("input", {id: this.state.ref, ref: this.state.ref, readOnly: "readonly", checked: checked, type: "checkbox"}));
	}

	switch(){
		var el = this.getNode(this.state.ref);
		var checked = !$(el).is(':checked');
		this.props.valueLink.requestChange(checked, this.props.bindChange || null);
	}
}

export default SwitchButton;
