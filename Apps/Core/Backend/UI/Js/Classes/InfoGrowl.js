import GrowlMessage from '/Apps/Core/Backend/UI/Js/Classes/GrowlMessage';

class InfoGrowl {

	constructor(message, title = false, sticky = false, ttl = 3000) {
		this.id = Tools.createUID();
		if (message instanceof GrowlMessage) {
			this.message = message;
		} else {
			this.message = new GrowlMessage();
			this.message.addMessage(message);
		}
		this.title = title;
		this.sticky = sticky;
		this.ttl = ttl;
		this.class = 'info';
	}
}

export default InfoGrowl;