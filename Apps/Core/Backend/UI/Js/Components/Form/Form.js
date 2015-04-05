import BaseComponent from '/Core/Base/BaseComponent';

class Form extends BaseComponent {

	getFqn(){
		return 'Core.View.Form';
	}

	getTemplate(){
		var classes = this.props.className || 'form-horizontal';

		if(classes instanceof Object) {
			classes = this.classSet(classes);
		}

		return this.getReactTemplate();
	}

	componentDidMount(){
		// Disable form submission
		var form = this.getNode(this.props.name);
		$(form).submit(function (e) {
			e.preventDefault();
		});
	}
}

export default Form;
