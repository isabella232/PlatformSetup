import BaseComponent from '/Core/Core/Base/BaseComponent';

class GridContainer extends BaseComponent {

	getFqn(){
		return 'Core.UI.GridContainer';
	}

	getTemplate(){
		return React.createElement("div", {className: "container"}, this.props.children); 
	}
}

export default GridContainer;
