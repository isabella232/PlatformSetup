import InfoGrowl from 'Webiny/UI/Classes/Growl/InfoGrowl';

class WarningGrowl extends InfoGrowl {

	constructor(message, title = false, sticky = false, ttl = 3000) {
		super(message, title, sticky, ttl);
		this.class = 'warning';
	}
}

export default WarningGrowl;