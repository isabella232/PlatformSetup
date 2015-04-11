import GrowlText from '/Apps/Core/Backend/UI/Js/Classes/Message/GrowlText';

class InfoGrowl {

	constructor(message, title = false, sticky = false, ttl = 3000) {
		this.messages = [];
		this.id = Tools.createUID();
		this.title = title;
		this.sticky = sticky;
		this.ttl = ttl;
		this.class = 'info';

		this.addMessage(message);
	}

	setTitle(title) {
		this.title = title;
		return this;
	}

	setSticky(sticky = true) {
		this.sticky = sticky;
		return this;
	}

	addMessage(message){
		if(!message){
			return this;
		}

		if (typeof message == 'string') {
			message = new GrowlText(message);
		}
		this.messages.push(message);
		return this;
	}
}

export default InfoGrowl;