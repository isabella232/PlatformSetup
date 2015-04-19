import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid6 extends BaseComponent {

	getFqn(){
		return 'Core.UI.Grid6';
	}
	
	getTemplate(){
		return React.createElement(Grid, {sm: "6", xs: "12"}, this.props.children); 
	}
}

export default Grid6;
