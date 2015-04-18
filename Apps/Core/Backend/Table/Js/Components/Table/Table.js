import BaseComponent from '/Core/Core/Base/BaseComponent';

class Table extends BaseComponent {

	getTemplate() {
		var css = {
			'table': true
		};

		Object.assign(css, this.props.classObj || {});
		return this.getReactTemplate();
	}
}

export default Table;
