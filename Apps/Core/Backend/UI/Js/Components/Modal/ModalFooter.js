import BaseComponent from '/Core/Core/Base/BaseComponent';

class ModalFooter extends BaseComponent {

	getTemplate() {
		return '<div class="modal-footer">{this.props.children}</div>';
	}
}

export default ModalFooter;
