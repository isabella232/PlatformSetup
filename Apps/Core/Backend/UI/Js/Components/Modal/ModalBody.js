import BaseComponent from '/Core/Base/BaseComponent';

class ModalBody extends BaseComponent {

	getTemplate() {
		return '<div class="modal-body">{this.props.children}</div>';
	}

}

export default ModalBody;
