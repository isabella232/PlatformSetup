class Table extends Webiny.Base.Component {

	getTemplate() {
		var css = {
			'table': true
		};

		Object.assign(css, this.props.classObj || {});
		return this.getReactTemplate();
	}
}

export default Table;
