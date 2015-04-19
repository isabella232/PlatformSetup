import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid1 extends BaseComponent {

	getFqn(){
		return 'Core.UI.Grid1';
	}

	getTemplate(){
		return React.createElement(Grid, {sm: "1", xs: "12"}, this.props.children); 
	}
}

export default Grid1;
