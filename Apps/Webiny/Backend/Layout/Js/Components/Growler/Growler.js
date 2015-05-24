class Growler extends Webiny.Base.Component {

	componentDidMount() {
		this.store = this.getStore('Webiny.UI.GrowlsStore');

		// Listen to store changes
		this.onStore(this.store, (data) => {
			this.setState({growls: data});
		});
	}

	removeGrowl(id){
		$(this.getDOM(id)).fadeOut(400);
		setTimeout(() => {
			this.trigger('Webiny.UI.RemoveGrowl', id);
		}, 400);
	}

	removeAll(){
		this.trigger('Webiny.UI.RemoveGrowls');
	}

	getInitialState() {
		return {
			growls: []
		};
	}
}

export default Growler;