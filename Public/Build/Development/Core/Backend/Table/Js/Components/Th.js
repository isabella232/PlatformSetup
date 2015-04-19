import BaseComponent from '/Core/Core/Base/BaseComponent';

class Th extends BaseComponent {

	getFqn(){
		return 'Core.Table.Th';
	}

	getTemplate(){
		return React.createElement("th", {className: Tools.classSet(this.props.className)}, this.props.children); 
	}
}

export default Th;
