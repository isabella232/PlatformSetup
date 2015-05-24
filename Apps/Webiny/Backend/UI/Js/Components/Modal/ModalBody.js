class ModalBody extends Webiny.Base.Component {

	getTemplate() {
		return '<div class="modal-body">{this.props.children}</div>';
	}

}

export default ModalBody;
