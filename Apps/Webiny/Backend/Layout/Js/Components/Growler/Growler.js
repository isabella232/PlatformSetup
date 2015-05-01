import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class Growler extends BaseComponent {

	componentDidMount() {
		this.store = this.getStore('Core.UI.GrowlsStore');

		// Listen to store changes
		this.onStore(this.store, (data) => {
			this.setState({growls: data});
		});
	}

	removeGrowl(id){
		$(this.getDOM(id)).fadeOut(400);
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