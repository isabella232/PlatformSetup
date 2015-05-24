import AppStore from 'Webiny/Layout/Stores/AppStore';

class Footer extends Webiny.Base.Component {

	componentDidMount() {
		// Get App store
		this.appStore = this.getStore('Webiny.Layout.AppStore');

		// Store change listener
		this.onStore(this.appStore, (data) => {
			this.setState({developerMode: data.developerMode});
		});

		// Initial load
		this.appStore.getData().then(data => {
			this.setState({developerMode: data.developerMode});
		});
	}

	getInitialState() {
		return {
			developerMode: false,
			links: [
				{
					name: 'Webiny 2.2',
					url: '#'
				},
				{
					name: 'Legal',
					url: '#'
				},
				{
					name: 'Copyright',
					url: '#'
				},
				{
					name: 'Support',
					url: '#'
				}
			],
			linksSecondary: [
				{
					name: 'Help',
					url: '#'
				},
				{
					name: 'Documentation',
					url: '#'
				},
				{
					name: 'GitHub',
					url: '#'
				}
			]
		};
	}

	toggleDeveloperMode(newValue, oldValue){
		this.trigger('App.ToggleDeveloperMode', newValue);
	}
}

export default Footer;
