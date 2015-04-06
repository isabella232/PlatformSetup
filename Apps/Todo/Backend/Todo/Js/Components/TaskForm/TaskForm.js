import BaseComponent from '/Core/Base/BaseComponent';

class TaskForm extends BaseComponent {

	componentDidMount() {
		this.tasksStore = this.getStore('Todo.Todo.TasksStore');
		this.tasksStore.crudGet(this.getParam('id')).then(response => {
			this.setState(response.getData());
		});
	}

	saveTodo(){
		this.trigger('Todo.Todo.saveTaskAction', this.state).then(actionResult => {
			if(!actionResult.hasErrors()){
				Router.goTo('TodoItemList');
			} else {
				actionResult.getErrors().forEach(error => {
					console.log(error.getCode()+': '+error.getMessage())
				});
			}
		});
	}
}

export default TaskForm;
