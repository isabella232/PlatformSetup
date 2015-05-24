class Grid1 extends Webiny.Base.Component {

	getTemplate(){
		return '<Grid sm="1" xs="12">{this.props.children}</Grid>';
	}
}

export default Grid1;
