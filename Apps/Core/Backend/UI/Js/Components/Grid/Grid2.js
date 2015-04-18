import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid2 extends BaseComponent {

	getTemplate(){
		return '<Grid sm="2" xs="12">{this.props.children}</Grid>';
	}
}

export default Grid2;
