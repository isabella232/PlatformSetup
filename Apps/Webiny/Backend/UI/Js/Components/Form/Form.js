import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class Form extends BaseComponent {

	getTemplate() {
		var classes = this.props.className || 'form-horizontal';

		if (classes instanceof Object) {
			classes = this.classSet(classes);
		}

		return '<form name={this.props.name} ref={this.props.name} class={classes}>{this.props.children}</form>';
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
