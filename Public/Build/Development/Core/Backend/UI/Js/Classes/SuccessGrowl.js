import InfoGrowl from '/Core/UI/Classes/InfoGrowl';

class SuccessGrowl extends InfoGrowl{

	constructor(message, title = false, sticky = false, ttl = 3000) {
		super(message, title, sticky, ttl);
		this.class = 'success';
	}
}

export default SuccessGrowl;