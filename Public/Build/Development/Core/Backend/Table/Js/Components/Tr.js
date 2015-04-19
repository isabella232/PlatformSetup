import BaseComponent from '/Core/Core/Base/BaseComponent';

class Tr extends BaseComponent {

	getFqn(){
		return 'Core.Table.Tr';
	}

	getTemplate() {
		return React.createElement("tr", {className: Tools.classSet(this.props.className)}, this.props.children); 
	}
}

export default Tr;
