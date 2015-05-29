class Grid4 extends Webiny.Base.Component {

	getTemplate(){
		return '<w-grid sm="4" xs="12">{this.props.children}</w-grid>';
	}
}

export default Grid4;
