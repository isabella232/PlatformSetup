import BaseComponent from '/Core/Core/Base/BaseComponent';
import AppStore from '/Core/Layout/Stores/AppStore';

class Footer extends BaseComponent {

	getTemplate(){ return React.createElement("footer", null,     React.createElement("div", {className: "developer-mode"},         React.createElement("span", null, "Developer mode"),         React.createElement(SwitchButton, {valueLink: this.linkState("developerMode"), bindChange: this.toggleDeveloperMode})    ),     React.createElement("ul", {className: "links"},         Tools.keys(this.state.links).map(function(index)  {var item = this.state.links[index]; return React.createElement("li", {key: index},                 React.createElement(Link, {href: item.url}, item.name)            )}.bind(this))    ),     React.createElement("ul", {className: "links secondary"}            ),     React.createElement("div", {className: "dropdown sort feedback-wrap"},         React.createElement("button", {className: "btn btn-default dropdown-toggle feedback", type: "button"},             React.createElement("span", {className: "icon icon-comments"}),             React.createElement("span", null, "HELP US WITH FEEDBACK")        )    ));}

	getFqn(){
		return 'Core.Layout.Footer';
	}

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
