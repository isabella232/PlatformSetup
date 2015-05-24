class Th extends Webiny.Base.Component {

	getTemplate(){
		return '<th className={this.props.className}>{this.props.children}</th>';
	}
}

export default Th;
