import Tools from 'Webiny/Core/Tools/Tools';

class GrowlLink {

	constructor(text, action, params = [], classes = null) {
		this.text = text;
		this.action = action;
		this.classes = classes;
		if (params instanceof Array) {
			this.params = params;
		} else {
			this.params = [params];
		}
	}

	render(growlComponent) {
		// Append growl component that is triggering onClick callback to be available in the callback
		this.params.push(growlComponent);

		// Build link attributes
		var attributes = {
			className: Tools.classSet(this.classes),
			href: '#',
			onClick: () => {
				this.action.apply(null, this.params)
			}
		};
		return React.createElement(Link, attributes, this.text);
	}
}

export default GrowlLink;