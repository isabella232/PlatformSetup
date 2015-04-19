import BaseComponent from '/Core/Core/Base/BaseComponent';
import EventManager from '/Core/Core/EventManager';

/**
 * App is the main container that will hold all other components.
 * This component is the first one to render in the <body> element.
 */
class App extends BaseComponent {

	getTemplate(){ return React.createElement("div", {className: "master minimized"},     React.createElement(Navigation, null),     React.createElement(Growler, null),     React.createElement("div", {className: "master-content container-fluid"},         function(){return ComponentLoader.getComponents("MasterContent");}.bind(this)()    ),     React.createElement(Footer, null));}

	getFqn(){
		return 'Core.Layout.App';
	}

	componentDidMount() {

		EventManager.addListener('renderRoute', () => {
			this.setState({
				time: new Date().getTime()
			});
		});

		this.appStore = this.getStore('Core.Layout.AppStore');

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
