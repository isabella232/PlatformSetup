import BaseComponent from '/Core/Core/Base/BaseComponent';

class DomainPicker extends BaseComponent {

	getTemplate(){ return React.createElement("div", {className: "domain-picker", myCustomTag: "Yeah!"},     React.createElement("div", {className: "dropdown"},         React.createElement("button", {className: "btn btn-default dropdown-toggle", type: "button", id: "dropdownMenu1", "data-toggle": "dropdown"},             React.createElement("span", {className: "domain-name"}, this.state.domains[0].name),             React.createElement("span", {className: "caret"})        ),         React.createElement("ul", {className: "dropdown-menu", role: "menu", "aria-labelledby": "dropdownMenu1"},             React.createElement("li", {role: "presentation", className: "spec"}, React.createElement(Link, {role: "menuitem", href: "#"}, " + ", this.props.addNewSite)),             Tools.keys(this.state.domains).map(function(index)  {var item = this.state.domains[index]; return React.createElement("li", {key: index, role: "presentation"}, React.createElement(Link, {role: "menuitem", href: "#"}, item.name))}.bind(this))        )    ),     React.createElement(Link, {href: "#", className: "open"},         React.createElement("span", {className: "icon-external-link icon"})    ));}

	getFqn(){
		return 'Core.Layout.DomainPicker';
	}

	getInitialState() {
		return {
			domains: [
				{name: "www.booking.com"},
				{name: "www.facebook.com"},
				{name: "www.google.com"}
			]
		}
	}
}

export default DomainPicker;
