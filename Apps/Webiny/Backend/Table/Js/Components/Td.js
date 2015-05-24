class Td extends Webiny.Base.Component {

	getTemplate() {
		return '<td className={this.props.className}>{this.props.children}</td>';
	}
}

export default Td;
