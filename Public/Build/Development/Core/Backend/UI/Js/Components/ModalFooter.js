import BaseComponent from '/Core/Core/Base/BaseComponent';

class ModalFooter extends BaseComponent {

	getFqn(){
		return 'Core.UI.ModalFooter';
	}

	getTemplate() {
		return React.createElement("div", {className: "modal-footer"}, this.props.children); 
	}
}

export default ModalFooter;
