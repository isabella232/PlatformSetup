import BaseComponent from '/Core/Core/Base/BaseComponent';

class Td extends BaseComponent {

	getFqn(){
		return 'Core.Table.Td';
	}

	getTemplate() {
		return React.createElement("td", {className: Tools.classSet(this.props.className)}, this.props.children); 
	}
}

export default Td;
