import ActionError from '/Core/Action/ActionError';

class ActionResult {
	constructor(results) {
		this.results = results;
	}

	hasErrors(){
		var errors = 0;
		this.results.forEach(result => {
			if(result.isError()){
				errors++;
			}
		});
		return errors > 0;
	}

	getErrors(){
		var errors = [];
		this.results.forEach(result => {
			if(result.isError()){
				errors.push(new ActionError(result.getErrorReport()));
			}
		});
		return errors;
	}
}

export default ActionResult;