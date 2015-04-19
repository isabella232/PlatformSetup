class ApiResponse {

	constructor(httpResponse) {
		this.response = httpResponse;
	}

	isError(){
		return 'errorReport' in this.response.data;
	}

	getErrorReport(){
		if(this.isError()){
			return this.response.data.errorReport;
		}
		return null;
	}

	getData(){
		if('data' in this.response && 'data' in this.response.data){
			return this.response.data.data;
		}
		return null;
	}
}

export default ApiResponse;