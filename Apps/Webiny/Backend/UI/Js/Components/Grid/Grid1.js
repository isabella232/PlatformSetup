class Grid1 extends Webiny.Base.Component {

	getTemplate(){
		return '<w-grid sm="1" xs="12">{this.props.children}</w-grid>';
	}
}

export default Grid1;
