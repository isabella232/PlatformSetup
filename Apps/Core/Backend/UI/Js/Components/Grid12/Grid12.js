import BaseComponent from '/Core/Base/BaseComponent';

class Grid12 extends BaseComponent {

	getTemplate(){
		return '<div class="col-xs-12 col-sm-12">{this.props.children}</div>';
	}
}

export default Grid12;
