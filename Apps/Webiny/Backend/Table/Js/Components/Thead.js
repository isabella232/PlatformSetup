class Thead extends Webiny.Base.Component {

	getTemplate(){
		return '<thead className={this.props.className}>{this.props.children}</thead>';
	}
}

export default Thead;
