import BaseInputComponent from '/Webiny/Core/Base/BaseInputComponent';

class VerticalMany2One extends BaseInputComponent {

	componentWillMount() {
		super.componentWillMount();
		this.inputRef = Tools.createUID();
	}

	componentDidMount() {
		var select = this.getDOM(this.inputRef);
		console.log(select)
		$(select).selectize({
			create: true,
			dropdownParent: 'body'
		});
	}

	getTemplate() {
		var ref = this.inputRef;
		return this.getReactTemplate();
	}

	getDOM(){

	}
}

export default VerticalMany2One;