import BaseComponent from '/Core/Base/BaseComponent';

class Tfoot extends BaseComponent {

	getTemplate(){
		return '<tfoot className={this.props.className}>{this.props.children}</tfoot>';
	}
}

export default Tfoot;
