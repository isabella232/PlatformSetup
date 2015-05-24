class Tfoot extends Webiny.Base.Component {

	getTemplate(){
		return '<tfoot className={this.props.className}>{this.props.children}</tfoot>';
	}
}

export default Tfoot;
