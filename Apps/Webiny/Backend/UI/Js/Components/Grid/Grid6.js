import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class Grid6 extends BaseComponent {
	
	getTemplate(){
		return '<Grid sm="6" xs="12">{this.props.children}</Grid>';
	}
}

export default Grid6;
