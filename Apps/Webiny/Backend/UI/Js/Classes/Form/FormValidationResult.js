class FormValidationResult {

	constructor(valid, message, value = null){
		this.valid = valid;
		this.message = message;
		this.value = value;
	}

	isValid(){
		return this.valid;
	}

	getMessage(){
		return this.message;
	}

	getValue(){
		return this.value;
	}
}

export default FormValidationResult;