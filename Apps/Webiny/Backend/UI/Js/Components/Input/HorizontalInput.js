import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';

class HorizontalInput extends BaseInputComponent {
	
	getInitialState() {
		var state = {
			_valid: null
		};
		_.set(state, 'css.' + 'col-sm-' + this.props.grid, true);
		return state;
	}
}

export default HorizontalInput;
