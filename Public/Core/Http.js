function responseHandler(response) {
	return response;
}

class Http {

	get(url, data, options = {}) {
		options.params = data;
		return axios.get(url, options).then(responseHandler);
	}

	delete(url, options = {}) {
		return axios.delete(url, options).then(responseHandler);
	}

	head(url, options = {}) {
		return axios.head(url, options).then(responseHandler);
	}

	post(url, data = {}, options = {}) {
		var postConfig = {
			headers: {
				"Content-type": "application/json;charset=UTF-8"
			}
		};

		var config = {};
		Object.assign(config, postConfig, options);
		return axios.post(url, data, config).then(responseHandler);
	}

	put(url, data = {}, options = {}) {
		return axios.put(url, data, options).then(responseHandler);
	}

	patch(url, data = {}, options = {}) {
		var defaultOptions = {
			headers: {
				"Content-type": "application/json;charset=UTF-8"
			}
		};
		var config = {};
		Object.assign(config, defaultOptions, options);
		return axios.patch(url, data, config).then(responseHandler).catch(responseHandler);
	}
}

export default new Http;