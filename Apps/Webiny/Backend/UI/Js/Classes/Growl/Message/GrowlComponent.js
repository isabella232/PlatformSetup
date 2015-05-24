class GrowlComponent extends Webiny.Base.Class {

	constructor(component, props = null, content = null) {
		super();
		this.component = component;
		this.props = props;
		this.content = content;
	}

	render() {
		var component = this.component;
		if(typeof this.component == 'string'){
			if(this.component in window) {
				component = window[this.component];
			} else {
				console.warn('Component `'+this.component+'` does not exist!');
				return null;
			}
		}
		return this.createElement(component, this.props, this.content);
	}
}

export default GrowlComponent;