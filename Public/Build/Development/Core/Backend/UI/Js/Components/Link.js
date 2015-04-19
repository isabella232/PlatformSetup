import BaseComponent from '/Core/Core/Base/BaseComponent';

class Link extends BaseComponent {

	getFqn(){
		return 'Core.UI.Link';
	}

	getTemplate(){
		var link = this.props.href;
		var route = this.props.route;
		var classes = this.props.className;

		if(typeof classes == 'string'){
			classes = classes.split(' ');
			classes.push('w-link');
			classes = classes.join(' ');
		} else if(classes instanceof Object) {
			classes['w-link'] = true;
			classes = this.classSet(classes);
		}

		// Build URL
		if(route){
			link = Router.getRoutePath(route);
		}
		if(this.props.params){
			Object.keys(this.props.params).forEach((param) => {
				link = link.replace(':'+param, this.props.params[param]);
			});
		}

		return React.createElement("a", {href: link, className: Tools.classSet(classes), onClick: this.props.onClick}, this.props.children); 
	}
}

export default Link;
