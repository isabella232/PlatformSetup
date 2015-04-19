import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class Grid1 extends BaseComponent {

	getTemplate(){
		return '<Grid sm="1" xs="12">{this.props.children}</Grid>';
	}
}

export default Grid1;
