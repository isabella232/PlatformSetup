class TaskStore extends Webiny.Base.EntityStore {

	getFqn() {
		return 'Todo.Todo.TaskStore';
	}

	getService() {
		return '/Todo/Backend/Todo/Item';
	}
}

export default new TaskStore;