class GridRow extends Webiny.Base.Component {

	getTemplate(){
		return '<div class="row">{this.props.children}</div>';
	}
}

export default GridRow;
