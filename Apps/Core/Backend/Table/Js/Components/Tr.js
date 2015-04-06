import BaseComponent from '/Core/Base/BaseComponent';

class Tr extends BaseComponent {

	getTemplate() {
		return '<tr className={this.props.className}>{this.props.children}</tr>';
	}
}

export default Tr;
