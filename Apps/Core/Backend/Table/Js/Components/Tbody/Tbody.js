import BaseComponent from '/Core/Base/BaseComponent';

class Tbody extends BaseComponent {

	getTemplate() {
		return '<tbody className={this.props.className}>{this.props.children}</tbody>';
	}
}

export default Tbody;
