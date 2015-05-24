/**
 * App is the main container that will hold all other components.
 * This component is the first one to render in the <body> element.
 */
class App extends Webiny.Base.Component {

	componentDidMount() {

		Webiny.EventManager.addListener('renderRoute', () => {
			this.setState({
				time: new Date().getTime()
			});
		});

		this.appStore = this.getStore('Webiny.Layout.AppStore');

		// Get initial data
		this.appStore.getData().then(data => {
			this.setState(data);
		});

		// Listen to store changes
		this.onStore(this.appStore, (data) => {
			this.setState(data);
		});
	}

	getInitialState(){
		return {
			developerMode: false
		};
	}
}

export default App;
