class Growl {

	constructor(message, title = false, sticky = false) {
		this.id = Tools.createUID();
		this.message = message;
		this.title = title;
		this.sticky = sticky;
	}
}

export default Growl;