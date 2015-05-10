import BaseComponent from 'Webiny/Core/Base/BaseComponent';
import AppStore from 'Webiny/Layout/Stores/AppStore';

class Footer extends BaseComponent {

	componentDidMount() {
		// Get App store
		this.appStore = this.getStore('Core.Layout.AppStore');

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
