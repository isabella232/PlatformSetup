import BaseComponent from 'Webiny/Core/Base/BaseComponent';
import Tools from 'Webiny/Core/Tools/Tools';

class SwitchButton extends BaseComponent {

	componentWillMount(){
		super.componentWillMount();
		this.id = Tools.createUID();
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

		var id = this.id;

		return this.getReactTemplate();
	}

	switch(){
		var el = this.getDOM().querySelector('input');
		var checked = !$(el).is(':checked');
		this.props.valueLink.requestChange(checked, this.props.bindChange || null);
	}
}

export default SwitchButton;
