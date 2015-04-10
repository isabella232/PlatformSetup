import BaseComponent from '/Core/Base/BaseComponent';

class Growl extends BaseComponent {

	componentDidMount() {
		if (!this.props.growl.sticky) {
			setTimeout(() => {
				this.close();
			}, this.props.growl.ttl || 3000);
		}
	}

	close() {
		if (this.isMounted()) {
			this.props.onRemove(this.props.growl.id);
		}
	}

	getTemplate() {
		var growl = this.props.growl;
		var classes = 'growl-notification ' + growl.class;
		var message = growl.message;
		if(growl.message instanceof Array){
			message = React.createElement(Link, {onClick: message[1]}, message[0]);
		}
		return this.getReactTemplate();
	}
}

export default Growl;