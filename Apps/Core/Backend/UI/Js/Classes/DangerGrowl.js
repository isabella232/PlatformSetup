import InfoGrowl from '/Apps/Core/Backend/UI/Js/Classes/InfoGrowl';

class DangerGrowl extends InfoGrowl {

	constructor(message, title = false, sticky = false, ttl = 3000) {
		super(message, title, sticky, ttl);
		this.class = 'danger';
	}
}

export default DangerGrowl;