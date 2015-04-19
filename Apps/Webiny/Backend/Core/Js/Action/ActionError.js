class ActionError {
	constructor(error) {
		this.code = error.code || '';
		this.message = error.message || '';
		this.description = error.description || '';
	}

	getCode() {
		return this.code;
	}

	getMessage() {
		return this.message;
	}

	getDescription() {
		return this.description;
	}
}

export default ActionError;