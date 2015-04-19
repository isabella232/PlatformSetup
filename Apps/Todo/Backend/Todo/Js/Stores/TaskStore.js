import EntityStore from '/Webiny/Core/Base/EntityStore';

class TaskStore extends EntityStore {

	getFqn() {
		return 'Todo.Todo.TaskStore';
	}

	getService() {
		return '/Todo/Backend/Todo/Item';
	}
}

export default new TaskStore;