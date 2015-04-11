class GrowlLink {

	constructor(text, action, params = []) {
		this.text = text;
		this.action = action;
		if(params instanceof Array){
			this.params = params;
		} else {
			this.params = [params];
		}
	}

	render(growlComponent){
		// Append growl component that is triggering onClick callback to be available in the callback
		this.params.push(growlComponent);
		var attributes = {onClick: () => {this.action.apply(null, this.params)}};
		return React.createElement(Link, attributes, this.text);
	}
}

export default GrowlLink;