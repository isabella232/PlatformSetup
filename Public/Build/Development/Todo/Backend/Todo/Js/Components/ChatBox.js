import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class ChatBox extends BaseComponent {

	getTemplate(){ return React.createElement("div", {className: "component"},     React.createElement("h3", null, "ChatBox"),     React.createElement(FormInline, {name: "form"},         React.createElement(FormGroup, null,             React.createElement(Input, {grid: "8", ref: "message", placeholder: "Your message"}),             React.createElement("div", {className: "col-sm-4"},                 React.createElement("button", {className: "btn btn-success", type: "submit", onClick: this.postMessage}, "Post")            )        ),         React.createElement("ul", null,             Tools.keys(this.state.messages).map(function(index)  {var msg = this.state.messages[index]; return React.createElement("li", {key: index},                     React.createElement("span", {className: "grey"}, msg.time.getTime(), " - "),                     React.createElement("span", null, msg.message)                )}.bind(this))        )    ));}

	getFqn(){
		return 'Todo.Todo.ChatBox';
	}

	getInitialState(){
		return {
			messages: [{
				message: 'Test',
				time: new Date()
			}]
		}
	}

	postMessage() {
		var messageInput = this.getDOM('message');
		var messages = this.state.messages;
		messages.push({
			message: messageInput.value,
			time: new Date()
		});

		messageInput.value = '';

		this.setState({
			messages: messages
		});
	}
}

export default ChatBox;
