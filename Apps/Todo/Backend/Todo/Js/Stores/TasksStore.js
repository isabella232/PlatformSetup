import BaseStore from '/Core/Base/BaseStore';

class TasksStore extends BaseStore {

	getFqn() {
		return 'Todo.Todo.TasksStore';
	}

	getService() {
		return '/todo/backend/todo/item';
	}

	init() {
		this.data = [];
		this.onAction('Todo.Todo.addTodoAction', this._onAddTask);
		this.onAction('Todo.Todo.saveTaskAction', this._onSaveTask);
		this.onAction('Todo.Todo.removeTodoAction', this._onRemoveTask);
		this.onAction('Todo.Todo.restoreTodoAction', this._onRestoreTask);
	}

	getInitialData(){
		return this.crudList().then(response => {
			return response.getData();
		});
	}

	_onAddTask(task) {
		return this.crudCreate(task, {postPush: true});
	}

	_onSaveTask(task) {
		return this.crudUpdate(task);
	}

	_onRemoveTask(item) {
		return this.crudDelete(item);
	}

	_onRestoreTask(item) {
		return this.crudRestore(item.id);
	}
}

export default TasksStore;