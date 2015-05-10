class Tbody extends Webiny.Base.Component {

	getTemplate() {
		return '<tbody className={this.props.className}>{this.props.children}</tbody>';
	}
}

export default Tbody;
