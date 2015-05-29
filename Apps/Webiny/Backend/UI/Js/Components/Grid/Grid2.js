class Grid2 extends Webiny.Base.Component {

	getTemplate(){
		return '<w-grid sm="2" xs="12">{this.props.children}</w-grid>';
	}
}

export default Grid2;
