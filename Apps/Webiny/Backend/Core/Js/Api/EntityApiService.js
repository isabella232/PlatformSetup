import ApiService from 'Webiny/Core/Api/ApiService';

class EntityApiService extends ApiService {

	crudList(filters, sorters, limit, page) {
		return this.get('/');
	}

	crudCreate(data) {
		return this.post('/', data);
	}

	crudDelete(id) {
		return this.delete(id);
	}

	crudRestore(id) {
		return this.post('/restore/' + id);
	}

	crudGet(id) {
		return this.get(id);
	}

	crudUpdate(id, data) {
		return this.patch(id, data);
	}
}

export default EntityApiService;