import BaseComponent from '/Core/Core/Base/BaseComponent';

class FormInline extends BaseComponent {

	getFqn(){
		return 'Core.UI.FormInline';
	}

	getTemplate(){
		return React.createElement(Form, {name: this.props.name, ref: this.props.name, className: "form-inline"}, this.props.children); 
	}
}

export default FormInline;
