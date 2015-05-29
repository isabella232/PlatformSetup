class Grid12 extends Webiny.Base.Component {

	getTemplate(){
		return '<w-grid sm="12" xs="12">{this.props.children}</w-grid>';
	}
}

export default Grid12;
