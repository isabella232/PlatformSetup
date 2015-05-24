class GridContainer extends Webiny.Base.Component {

	getTemplate(){
		return '<div class="container">{this.props.children}</div>';
	}
}

export default GridContainer;
