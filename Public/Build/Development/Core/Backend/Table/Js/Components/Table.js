import BaseComponent from '/Core/Core/Base/BaseComponent';

class Table extends BaseComponent {

	getFqn(){
		return 'Core.Table.Table';
	}

	getTemplate() {
		var css = {
			'table': true
		};

		Object.assign(css, this.props.classObj || {});
		return React.createElement("table", {className: Tools.classSet(css)}, this.props.children);
	}
}

export default Table;
