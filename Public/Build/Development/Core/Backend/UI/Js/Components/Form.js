import BaseComponent from '/Core/Core/Base/BaseComponent';

class Form extends BaseComponent {

	getFqn(){
		return 'Core.UI.Form';
	}

	getTemplate() {
		var classes = this.props.className || 'form-horizontal';

		if (classes instanceof Object) {
			classes = this.classSet(classes);
		}

		return React.createElement("form", {name: this.props.name, ref: this.props.name, className: Tools.classSet(classes)}, this.props.children); 
	}

	componentDidMount() {
		// Disable form submission
		var form = this.getNode(this.props.name);
		$(form).submit(function (e) {
			e.preventDefault();
		});
	}
}

export default Form;
