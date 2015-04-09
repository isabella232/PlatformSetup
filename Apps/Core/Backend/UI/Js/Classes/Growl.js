class Growl {

	constructor(message, title = false, sticky = false, ttl = 3000) {
		this.id = Tools.createUID();
		this.message = message;
		this.title = title;
		this.sticky = sticky;
		this.ttl = ttl;
	}
}

export default Growl;