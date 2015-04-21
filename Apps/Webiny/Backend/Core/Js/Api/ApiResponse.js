class ApiResponse {

	/**
	 * @param {HttpResponse} httpResponse
	 */
	constructor(httpResponse) {
		this.response = httpResponse;
		this.data = httpResponse.getData();
	}

	isError(){
		return 'errorReport' in this.data;
	}

	getErrorReport(){
		if(this.isError()){
			return this.data.errorReport;
		}
		return null;
	}

	getData(){
		if(this.data && 'data' in this.data){
			return this.data.data;
		}
		return null;
	}
}

export default ApiResponse;