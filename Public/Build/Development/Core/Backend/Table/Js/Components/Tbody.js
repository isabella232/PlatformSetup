import BaseComponent from '/Core/Core/Base/BaseComponent';

class Tbody extends BaseComponent {

	getFqn(){
		return 'Core.Table.Tbody';
	}

	getTemplate() {
		return React.createElement("tbody", {className: Tools.classSet(this.props.className)}, this.props.children); 
	}
}

export default Tbody;
