import BaseComponent from 'Webiny/Core/Base/BaseComponent';
import ListComponent from 'Todo/Todo/Components/TaskList';
import FormValidator from 'Webiny/UI/Classes/Form/FormValidator';

var TaskList = ListComponent.createComponent();

class TaskForm extends BaseComponent {

	getTemplate() {
		return this.getReactTemplate();
	}

	componentDidMount() {
		this.TaskStore = this.getStore('Todo.Todo.TaskStore');
		this.TaskStore.crudGet(this.getParam('id')).then(apiResponse => {
			this.setState(apiResponse.getData());
		});

		FormValidator.addValidator('taskEmail', value => {
			return this.TaskStore.getApi().get('/validate-email/' + this.getParam('id') + '/' + value).then(apiResponse => {
				if (apiResponse.isError() || !apiResponse.getData()) {
					return 'Email is already taken';
				}
				return true;
			});
		});
	}
	
	createTodo() {
		this.trigger('Todo.Todo.TaskCreate', this.state).then(actionResult => {
			if (!actionResult.hasErrors()) {
				Router.goTo('TodoItemList');
			} else {
				actionResult.getErrors().forEach(error => {
					console.log(error.getCode() + ': ' + error.getMessage())
				});
			}
		});
	}

	updateTodo() {
		this.trigger('Todo.Todo.TaskUpdate', this.state);
		Router.goTo('TodoItemList');
	}
}

export default TaskForm;
