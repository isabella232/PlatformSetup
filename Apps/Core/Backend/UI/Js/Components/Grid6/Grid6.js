import BaseComponent from '/Core/Base/BaseComponent';

class Grid6 extends BaseComponent {

	getTemplate(){
		return '<div class="col-xs-12 col-sm-6">{this.props.children}</div>';
	}
}

export default Grid6;
