import BaseComponent from '/Core/Core/Base/BaseComponent';

class ModalHeader extends BaseComponent {

	getTemplate(){ return React.createElement("div", {className: "modal-header"},     React.createElement("h4", null, this.props.children),     React.createElement("button", {onClick: this.props.onClose, type: "button", className: "close md-close", "data-dismiss": "modal", "aria-hidden": "true"}, "×"));}

	getFqn(){
		return 'Core.UI.ModalHeader';
	}


}

export default ModalHeader;
