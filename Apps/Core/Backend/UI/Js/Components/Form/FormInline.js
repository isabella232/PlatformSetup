import BaseComponent from '/Core/Core/Base/BaseComponent';

class FormInline extends BaseComponent {

	getTemplate(){
		return '<form name={this.props.name} ref={this.props.name} class="form-inline">{this.props.children}</form>';
	}
}

export default FormInline;
