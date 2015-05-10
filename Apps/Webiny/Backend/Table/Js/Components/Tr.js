class Tr extends Webiny.Base.Component {

	getTemplate() {
		return '<tr className={this.props.className}>{this.props.children}</tr>';
	}
}

export default Tr;
