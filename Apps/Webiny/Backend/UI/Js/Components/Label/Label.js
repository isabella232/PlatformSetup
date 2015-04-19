import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class Label extends BaseComponent {

	getTemplate() {
		return '<label class={this.state.css}>{this.props.children}</label>';
	}

	getInitialState() {
		var state = {
			css: {
				"control-label": true
			}
		};
		
		state.css["col-sm-" + this.props.grid] = true;

		return state;
	}

	getDefaultProperties() {
		return {
			grid: 2
		};
	}
}

export default Label;
