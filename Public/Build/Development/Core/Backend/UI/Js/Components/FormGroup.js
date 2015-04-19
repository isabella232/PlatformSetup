import BaseComponent from '/Core/Core/Base/BaseComponent';

class FormGroup extends BaseComponent {

	getFqn(){
		return 'Core.UI.FormGroup';
	}

	getTemplate(){
		return React.createElement("div", {className: "form-group"}, this.props.children); 
	}
}

export default FormGroup;
