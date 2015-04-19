import BaseComponent from '/Core/Core/Base/BaseComponent';

class GridRow extends BaseComponent {

	getFqn(){
		return 'Core.UI.GridRow';
	}

	getTemplate(){
		return React.createElement("div", {className: "row"}, this.props.children); 
	}
}

export default GridRow;
