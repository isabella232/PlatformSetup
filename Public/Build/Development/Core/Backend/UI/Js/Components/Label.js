import BaseComponent from '/Core/Core/Base/BaseComponent';

class Label extends BaseComponent {

	getFqn(){
		return 'Core.UI.Label';
	}

	getTemplate() {
		return React.createElement("label", {className: Tools.classSet(this.state.css)}, this.props.children); 
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
