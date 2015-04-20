class Request {

	constructor() {
		this.url = '';
		this.method = 'get';
		this.headers = {};
		this.params = null;
		this.data = null;
		this.responseType = 'json';
	}

	getUrl() {
		return this.url;
	}

	setUrl(url) {
		this.url = url;
		return this;
	}

	getMethod() {
		return this.method;
	}

	setMethod(method) {
		this.method = method;
		return this;
	}

	getParams() {
		return this.params;
	}

	/**
	 * Set query parameters
	 * @param params
	 * @returns {Request}
	 */
	setParams(params) {
		this.params = params;
		return this;
	}

	getData() {
		return this.data;
	}

	setData(data) {
		this.data = data;
		return this;
	}

	getHeaders() {
		return this.headers;
	}

	setHeaders(headers) {
		this.headers = headers;
		return this;
	}

	getResponseType() {
		return this.responseType;
	}

	setResponseType(responseType) {
		this.responseType = responseType;
		return this;
	}

	getRequestObject() {
		var config = {
			url: this.getUrl(),
			method: this.getMethod(),
			headers: this.getHeaders(),
			params: this.getParams(),
			data: this.getData(),
			responseType: this.getResponseType()
		};

		if (['put', 'post', 'patch'].indexOf(config.method) == -1) {
			delete config.data;
		}

		return config;
	}

	send(){
		return axios(this.getRequestObject());
	}

}

export default Request;