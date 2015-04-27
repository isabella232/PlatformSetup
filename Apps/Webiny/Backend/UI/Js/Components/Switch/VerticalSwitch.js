import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';

class VerticalSwitch extends BaseInputComponent {

	getInitialState() {
		var state = {};
		_.set(state, 'css.' + 'col-sm-' + this.props.grid, true);
		return state;
	}

}

export default VerticalSwitch;
