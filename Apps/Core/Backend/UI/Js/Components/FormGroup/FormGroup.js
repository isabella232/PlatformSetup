import BaseComponent from '/Core/Base/BaseComponent';

class FormGroup extends BaseComponent {

	getTemplate(){
		return '<div class="form-group">{this.props.children}</div>';
	}
}

export default FormGroup;
