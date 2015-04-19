import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid2 extends BaseComponent {

	getFqn(){
		return 'Core.UI.Grid2';
	}

	getTemplate(){
		return React.createElement(Grid, {sm: "2", xs: "12"}, this.props.children); 
	}
}

export default Grid2;
