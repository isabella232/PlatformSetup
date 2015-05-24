class ModalFooter extends Webiny.Base.Component {

	getTemplate() {
		return '<div class="modal-footer">{this.props.children}</div>';
	}
}

export default ModalFooter;
