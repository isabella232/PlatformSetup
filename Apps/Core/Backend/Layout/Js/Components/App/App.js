import BaseComponent from '/Core/Base/BaseComponent';
import EventManager from '/Core/EventManager';

/**
 * App is the main container that will hold all other components.
 * This component is the first one to render in the <body> element.
 */
class App extends BaseComponent {

	componentDidMount() {
		EventManager.addListener('renderRoute', () => {
			this.setState({
				time: new Date().getTime()
			});
		});
		window['App']  = this;
	}

	getInitialState(){
		return {
			developerMode: false
		};
	}
}

export default App;
