import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid12 extends BaseComponent {

	getFqn(){
		return 'Core.UI.Grid12';
	}

	getTemplate(){
		return React.createElement(Grid, {sm: "12", xs: "12"}, this.props.children); 
	}
}

export default Grid12;
