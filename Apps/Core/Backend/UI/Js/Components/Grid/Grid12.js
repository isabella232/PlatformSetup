import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid12 extends BaseComponent {

	getTemplate(){
		return '<Grid sm="12" xs="12">{this.props.children}</Grid>';
	}
}

export default Grid12;
