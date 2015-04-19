import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import ListComponent from '/Todo/Todo/Components/TaskList';

var TaskList = ListComponent.createComponent();

class TaskForm extends BaseComponent {

	getTemplate(){
		return this.getReactTemplate();
	}

	componentDidMount() {
		this.TaskStore = this.getStore('Todo.Todo.TaskStore');
		this.TaskStore.crudGet(this.getParam('id')).then(response => {
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
