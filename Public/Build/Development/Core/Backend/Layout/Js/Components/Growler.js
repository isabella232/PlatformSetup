import BaseComponent from '/Core/Core/Base/BaseComponent';

class Growler extends BaseComponent {

	getTemplate(){ return React.createElement("div", {id: "growl", className: "top-right growl"},     React.createElement("div", {className: "growl-notification"}),     Tools.keys(this.state.growls).map(function(index)  {var growl = this.state.growls[index]; return React.createElement(Growl, {key: index, growl: growl, onRemove: this.removeGrowl, ref: growl.id})}.bind(this)),     function(){if(Object.keys(this.state.growls).length > 1){return React.createElement("div", {className: "growl-closer highlight ui-corner-all default", onClick: this.removeAll}, "[ close all ]")}}.bind(this)());}

	getFqn(){
		return 'Core.Layout.Growler';
	}

	componentDidMount() {
		this.store = this.getStore('Core.UI.GrowlsStore');

		// Listen to store changes
		this.onStore(this.store, (data) => {
			this.setState({growls: data});
		});
	}

	removeGrowl(id){
		$(this.getNode(id)).fadeOut(400);
		setTimeout(() => {
			this.trigger('Core.UI.RemoveGrowl', id);
		}, 400);
	}

	removeAll(){
		this.trigger('Core.UI.RemoveGrowls');
	}

	getInitialState() {
		return {
			growls: []
		};
	}
}

export default Growler;