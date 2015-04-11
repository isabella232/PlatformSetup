import ApiResponse from '/Core/Api/ApiResponse';
import Registry from '/Core/Registry';

function handleResponse(response) {
	// Log Http responses to console if developerMode is enabled
	return Registry.getStore('Core.Layout.AppStore').getData().then(data => {
		if(data.developerMode){
			console.log(response)
		}
		return new ApiResponse(response);
	});
}

class ApiService {

	constructor(url) {
		this.url = url.toLowerCase();
	}

	crudList(filters, sorters, limit, page) {
		return Http.get(_apiUrl + this.url).then(handleResponse).catch(handleResponse);
	}

	crudCreate(data) {
		return Http.post(_apiUrl + this.url, data).then(handleResponse).catch(handleResponse);
	}

	crudDelete(id) {
		return Http.delete(_apiUrl + this.url + '/' + id).then(handleResponse).catch(handleResponse);
	}

	crudReplace() {

	}

	crudGet(id) {
		return Http.get(_apiUrl + this.url + '/' + id).then(handleResponse).catch(handleResponse);
	}

	crudUpdate(action, data, config = {}) {
		return Http.patch(_apiUrl + this.url + '/' + action, data, config).then(handleResponse).catch(handleResponse);
	}

	get(action, data, config = {}) {
		return Http.get(_apiUrl + this.url + '/' + action, data, config).then(handleResponse).catch(handleResponse);
	}

	delete(action, config = {}) {
		return Http.delete(_apiUrl + this.url + '/' + action, config).then(handleResponse).catch(handleResponse);
	}

	head(action, config = {}) {
		return Http.head(_apiUrl + this.url + '/' + action, config).then(handleResponse).catch(handleResponse);
	}

	post(action, data = {}, config = {}) {
		return Http.post(_apiUrl + this.url + '/' + action, data, config).then(handleResponse).catch(handleResponse);
	}

	put(action, data = {}, config = {}) {
		return Http.put(_apiUrl + this.url + '/' + action, data, config).then(handleResponse).catch(handleResponse);
	}

	patch(action, data = {}, config = {}) {
		return Http.patch(_apiUrl + this.url + '/' + action, data, config).then(handleResponse).catch(handleResponse);
	}
}

export default ApiService;