import ActionError from 'Webiny/Core/Action/ActionError';
import ApiResponse from 'Webiny/Core/Api/ApiResponse';

class ActionResult {
	constructor(results) {
		this.results = results;
	}

	hasErrors(){
		var errors = 0;
		this.results.forEach(result => {
			if(result instanceof ApiResponse && result.isError()){
				errors++;
			}
		});
		return errors > 0;
	}

	/**
	 * Get action errors (ActionError)
	 * @returns {Array}
	 */
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