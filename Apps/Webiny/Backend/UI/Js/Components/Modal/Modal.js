import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class Modal extends BaseComponent {

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
		return this.getReactTemplate();
	}
}

export default Modal;
