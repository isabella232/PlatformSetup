import BaseComponent from 'Webiny/Core/Base/BaseComponent';

class Grid4 extends BaseComponent {

	getTemplate(){
		return '<Grid sm="4" xs="12">{this.props.children}</Grid>';
	}
}

export default Grid4;
