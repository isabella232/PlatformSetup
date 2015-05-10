import HttpRequest from 'Webiny/Core/Http/HttpRequest'
import HttpResponse from 'Webiny/Core/Http/HttpResponse'

var requestInterceptors = [];
var responseInterceptors = [];
var defaultHeaders = {};

function execute(http, options) {
	var headers = Object.assign({}, defaultHeaders, options.headers || {});
	http.setHeaders(headers);
	http.setResponseType(options.responseType || 'json');
	http.setParams(options.params || null);

	var response = null;
	for(var i in requestInterceptors){
		var interceptor = requestInterceptors[i];
		response = interceptor(http);
		if(response instanceof HttpResponse){
			break;
		}
	}
	response = response ? Q.when(response) : http.send();

	return response.then(httpResponse => {
		responseInterceptors.forEach(interceptor => interceptor(httpResponse));
		return httpResponse;
	});
}

var Http = {
	Request: HttpRequest,
	Response: HttpResponse,

	get(url, params = {}, options = {}) {
		var http = new HttpRequest();
		http.setUrl(url).setMethod('get').setParams(params);
		return execute(http, options);
	},

	delete(url, options = {}) {
		var http = new HttpRequest();
		http.setUrl(url).setMethod('delete');
		return execute(http, options);
	},

	head(url, options = {}) {
		var http = new HttpRequest();
		http.setUrl(url).setMethod('head');
		return execute(http, options);
	},

	post(url, data = {}, options = {}) {
		var http = new HttpRequest();
		http.setUrl(url).setMethod('post').setData(data);
		return execute(http, options);
	},

	put(url, data = {}, options = {}) {
		var http = new HttpRequest();
		http.setUrl(url).setMethod('put').setData(data);
		return execute(http, options);
	},

	patch(url, data = {}, options = {}) {
		var http = new HttpRequest();
		http.setUrl(url).setMethod('patch').setData(data);
		return execute(http, options);
	},

	addRequestInterceptor(interceptor) {
		requestInterceptors.push(interceptor);
		return this;
	},

	addResponseInterceptor(interceptor) {
		responseInterceptors.push(interceptor);
		return this;
	}
};

export default Http;