import BaseComponent from '/Core/Base/BaseComponent';

class Growler extends BaseComponent {

	componentDidMount() {
		this.store = this.getStore('Core.UI.GrowlsStore');

		// Listen to store changes
		this.onStore(this.store, (data) => {
			this.setState({growls: data});
		});
	}

	removeGrowl(ref){

	}

	getInitialState() {
		return {
			growls: []
		};
	}
}

export default Growler;