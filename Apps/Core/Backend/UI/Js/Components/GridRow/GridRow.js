import BaseComponent from '/Core/Base/BaseComponent';

class GridRow extends BaseComponent {

	getTemplate(){
		return '<div class="row">{this.props.children}</div>';
	}
}

export default GridRow;
