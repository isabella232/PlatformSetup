import BaseComponent from '/Core/Core/Base/BaseComponent';

class Switch extends BaseComponent {

	getTemplate(){ return React.createElement("wdiv", null,     React.createElement(Label, {grid: "2"}, this.props.label),     function(){if(this.props.inline){return React.createElement("wdiv", null, React.createElement("div", {className: "clear"}),         React.createElement(SwitchButton, {buttons: this.props.buttons || null, valueLink: this.props.valueLink}))} else { return React.createElement("div", {className: "col-md-10"},             React.createElement(SwitchButton, {buttons: this.props.buttons || null, valueLink: this.props.valueLink})        );}}.bind(this)());}

	getFqn(){
		return 'Core.UI.Switch';
	}

}

export default Switch;
