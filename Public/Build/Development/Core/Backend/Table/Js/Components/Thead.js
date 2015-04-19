import BaseComponent from '/Core/Core/Base/BaseComponent';

class Thead extends BaseComponent {

	getFqn(){
		return 'Core.Table.Thead';
	}

	getTemplate(){
		return React.createElement("thead", {className: Tools.classSet(this.props.className)}, this.props.children); 
	}
}

export default Thead;
