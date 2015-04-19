import BaseComponent from '/Core/Core/Base/BaseComponent';

class Tfoot extends BaseComponent {

	getFqn(){
		return 'Core.Table.Tfoot';
	}

	getTemplate(){
		return React.createElement("tfoot", {className: Tools.classSet(this.props.className)}, this.props.children); 
	}
}

export default Tfoot;
