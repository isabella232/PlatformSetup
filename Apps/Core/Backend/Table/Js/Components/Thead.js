import BaseComponent from '/Core/Core/Base/BaseComponent';

class Thead extends BaseComponent {

	getTemplate(){
		return '<thead className={this.props.className}>{this.props.children}</thead>';
	}
}

export default Thead;
