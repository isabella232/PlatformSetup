import BaseComponent from 'Webiny/Core/Base/BaseComponent';

class Th extends BaseComponent {

	getTemplate(){
		return '<th className={this.props.className}>{this.props.children}</th>';
	}
}

export default Th;
