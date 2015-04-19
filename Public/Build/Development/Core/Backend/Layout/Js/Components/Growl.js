import BaseComponent from '/Core/Core/Base/BaseComponent';

class Growl extends BaseComponent {

	getFqn(){
		return 'Core.Layout.Growl';
	}

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
		return React.createElement("div", {ref: growl.id, className: Tools.classSet(classes), style: {display:'block'}},     React.createElement("div", {className: "growl-close", onClick: this.close}, "x"),     function(){if(growl.title){return React.createElement("div", {className: "growl-header"}, growl.title)}}.bind(this)(),     Tools.keys(growl.messages).map(function(index)  {var item = growl.messages[index]; return React.createElement("div", {key: index, className: "growl-message"},             item.render(this)        )}.bind(this)));
	}
}

export default Growl;