import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid extends BaseComponent {

	getFqn(){
		return 'Core.UI.Grid';
	}

	getTemplate() {
		var classes = {};
		classes['col-xs-'+this.props.xs] = true;
		classes['col-sm-'+this.props.sm] = true;

		return React.createElement("div", {className: Tools.classSet(classes)}, this.props.children); 
	}
}

export default Grid;
