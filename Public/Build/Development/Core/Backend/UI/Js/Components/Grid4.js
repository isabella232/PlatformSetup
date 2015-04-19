import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid4 extends BaseComponent {

	getFqn(){
		return 'Core.UI.Grid4';
	}

	getTemplate(){
		return React.createElement(Grid, {sm: "4", xs: "12"}, this.props.children); 
	}
}

export default Grid4;
