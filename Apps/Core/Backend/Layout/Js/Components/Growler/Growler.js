import BaseComponent from '/Core/Base/BaseComponent';

class Growler extends BaseComponent {

	componentDidMount() {
		this.store = this.getStore('Core.UI.GrowlsStore');

		// Listen to store changes
		this.onStore(this.store, (data) => {
			this.setState({growls: data});
		});
	}

	removeGrowl(id){
		$(this.getNode(id)).fadeOut();
		setTimeout(() => {
			this.trigger('Core.UI.RemoveGrowl', id);
		}, 500);

	}

	getInitialState() {
		return {
			growls: []
		};
	}
}

export default Growler;