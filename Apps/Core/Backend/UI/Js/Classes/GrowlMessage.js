class GrowlMessage {

	constructor() {
		this.messages = [];
	}

	addMessage(message, action = null, parameters = null){
		this.messages.push([message, action, parameters]);

		return this;
	}

	/*getMessagesDOM(){
		var messages = [];
		this.messages.forEach(msg => {
			var attributes = {};
			var action = null;
			var params = [];
			if(msg[1]){
				action = msg[1];
			}
			if(msg[2]){
				params = msg[2];
			}
			if(action){
				attributes = {onClick: () => {action.apply(null, params)}}
				messages.push(React.createElement(Link, attributes, msg[0]));
			} else {
				messages.push(msg[0]);
			}
		});
		return messages;
	}*/
}

export default GrowlMessage;