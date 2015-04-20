import Request from '/Webiny/Core/Http/Request'

class Http {

	constructor() {
		this.requestInterceptors = [];
		this.responseInterceptors = [];
		this.defaultHeaders = {};
	}

	execute(http, options) {
		var headers = Object.assign({}, this.defaultHeaders, options.headers || {});
		http.setHeaders(headers);
		http.setResponseType(options.responseType || 'json');
		http.setParams(options.params || null);
		this.requestInterceptors.forEach(interceptor => interceptor(http));
		return http.send().then(response => {
			this.responseInterceptors.forEach(interceptor => interceptor(response));
			return response;
		});
	}

	get(url, params = {}, options = {}) {
		var http = new Request();
		http.setUrl(url).setMethod('get').setParams(params);
		return this.execute(http, options);
	}

	delete(url, options = {}) {
		var http = new Request();
		http.setUrl(url).setMethod('delete');
		return this.execute(http, options);
	}

	head(url, options = {}) {
		var http = new Request();
		http.setUrl(url).setMethod('head');
		return this.execute(http, options);
	}

	post(url, data = {}, options = {}) {
		var http = new Request();
		http.setUrl(url).setMethod('post').setData(data);
		return this.execute(http, options);
	}

	put(url, data = {}, options = {}) {
		var http = new Request();
		http.setUrl(url).setMethod('put').setData(data);
		return this.execute(http, options);
	}

	patch(url, data = {}, options = {}) {
		var http = new Request();
		http.setUrl(url).setMethod('patch').setData(data);
		return this.execute(http, options);
	}

	addRequestInterceptor(interceptor){
		this.requestInterceptors.push(interceptor);
		return this;
	}

	addResponseInterceptor(interceptor){
		this.responseInterceptors.push(interceptor);
		return this;
	}
}

export default new Http;