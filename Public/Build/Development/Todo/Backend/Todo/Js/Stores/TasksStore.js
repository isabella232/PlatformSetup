import EntityStore from '/Webiny/Core/Base/EntityStore';

class TaskStore extends EntityStore {

	getFqn() {
		return 'Todo.Todo.TaskStore';
	}

	getService() {
		return '/Todo/Backend/Todo/Item';
	}

	init() {
		this.data = [];
		super.init();
	}

	/*_onCreateTask(task) {
		return this.crudCreate(task, {postPush: true});
	}

	_onUpdateTask(task) {
		return this.crudUpdate(task);
	}

	_onDeleteTask(item) {
		return this.crudDelete(item);
	}

	_onRestoreTask(item) {
		return this.crudRestore(item.id);
	}*/
}

export default new TaskStore;