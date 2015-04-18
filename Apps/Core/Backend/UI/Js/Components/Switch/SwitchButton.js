import BaseComponent from '/Core/Core/Base/BaseComponent';

class SwitchButton extends BaseComponent {

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

		return this.getReactTemplate();
	}

	switch(){
		var el = this.getNode(this.state.ref);
		var checked = !$(el).is(':checked');
		this.props.valueLink.requestChange(checked, this.props.bindChange || null);
	}
}

export default SwitchButton;
