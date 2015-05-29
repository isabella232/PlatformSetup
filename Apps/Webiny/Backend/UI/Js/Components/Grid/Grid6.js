class Grid6 extends Webiny.Base.Component {
	
	getTemplate(){
		return '<w-grid sm="6" xs="12">{this.props.children}</w-grid>';
	}
}

export default Grid6;
