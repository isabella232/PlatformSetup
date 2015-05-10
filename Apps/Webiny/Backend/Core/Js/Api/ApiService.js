import ApiResponse from 'Webiny/Core/Api/ApiResponse';
import Registry from 'Webiny/Core/Registry';

function handleResponse(response) {
	// Log Http responses to console if developerMode is enabled
	return Registry.getStore('Core.Layout.AppStore').getData().then(data => {
		if (data.developerMode) {
			console.log(response)
		}
		return new ApiResponse(response);
	});
}

function sanitize(string) {
	return _.trim(string, '/ ');
}

class ApiService {

	constructor(url) {
		this.url = url.toLowerCase();
	}

	get(action, data, config = {}) {
		return Http.get(_apiUrl + this.url + '/' + sanitize(action), data, config).then(handleResponse).catch(handleResponse);
	}

	delete(action, config = {}) {
		return Http.delete(_apiUrl + this.url + '/' + sanitize(action), config).then(handleResponse).catch(handleResponse);
	}

	head(action, config = {}) {
		return Http.head(_apiUrl + this.url + '/' + sanitize(action), config).then(handleResponse).catch(handleResponse);
	}

	post(action, data = {}, config = {}) {
		return Http.post(_apiUrl + this.url + '/' + sanitize(action), data, config).then(handleResponse).catch(handleResponse);
	}

	put(action, data = {}, config = {}) {
		return Http.put(_apiUrl + this.url + '/' + sanitize(action), data, config).then(handleResponse).catch(handleResponse);
	}

	patch(action, data = {}, config = {}) {
		return Http.patch(_apiUrl + this.url + '/' + sanitize(action), data, config).then(handleResponse).catch(handleResponse);
	}
}

export default ApiService;