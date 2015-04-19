import BaseComponent from '/Core/Core/Base/BaseComponent';

class ModalBody extends BaseComponent {

	getFqn(){
		return 'Core.UI.ModalBody';
	}

	getTemplate() {
		return React.createElement("div", {className: "modal-body"}, this.props.children); 
	}

}

export default ModalBody;
