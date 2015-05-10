import BaseComponent from 'Webiny/Core/Base/BaseComponent';

class ChatBox extends BaseComponent {

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
