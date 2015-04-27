import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';

class InlineInput extends BaseInputComponent {
	
	getInitialState() {
		var state = {
			_valid: null
		};
		_.set(state, 'css.' + 'col-sm-' + this.props.grid, true);
		return state;
	}
}

export default InlineInput;
