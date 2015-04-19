import BaseComponent from '/Core/Core/Base/BaseComponent';

class Modal extends BaseComponent {

	getFqn(){
		return 'Core.UI.Modal';
	}

	hide() {
		this.props.onHide();

		this.setState({
			isShown: false,
			display: 'none'
		}, this.props.onHidden);

	}

	show() {
		this.props.onShow();
		this.setState({
			isShown: true
		}, this.props.onShown);
	}

	getInitialState() {
		return {
			isShown: false
		};
	}

	getDefaultProperties(){
		return {
			onHide: () => {},
			onHidden: () => {},
			onShow: () => {},
			onShown: () => {}
		};
	}

	getTemplate() {
		var display = this.state.isShown ? 'block' : 'none';
		return React.createElement("div", {style: {display: display}},     React.createElement("div", {className: "modal-backdrop in"}),     React.createElement("div", {className: "modal", id: this.props.ref, tabIndex: "-1", role: "dialog", style: {display: display}},         React.createElement("div", {className: "modal-dialog"},             React.createElement("div", {className: "modal-content"},                 function(){if(this.props.title){return React.createElement(ModalHeader, {onClose: this.hide}, this.props.title)}}.bind(this)(),                 this.props.children            )        )    ));
	}
}

export default Modal;
