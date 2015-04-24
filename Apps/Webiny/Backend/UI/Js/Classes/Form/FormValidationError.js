class FormValidationError {

	constructor(errorMessage, value){
		this.errorMessage = errorMessage;
		this.value = value;
	}

	getErrorMessage(){
		return this.errorMessage;
	}

	getValue(){
		return this.value;
	}
}

export default FormValidationError;