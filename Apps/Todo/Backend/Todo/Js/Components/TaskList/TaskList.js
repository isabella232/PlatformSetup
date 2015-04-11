import BaseComponent from '/Core/Base/BaseComponent';
import MyDomainPicker from '/Apps/Core/Layout/Js/Components/MyDomainPicker';
import InfoGrowl from '/Apps/Core/Backend/UI/Js/Classes/InfoGrowl';
import SuccessGrowl from '/Apps/Core/Backend/UI/Js/Classes/SuccessGrowl';
import DangerGrowl from '/Apps/Core/Backend/UI/Js/Classes/DangerGrowl';
import GrowlMessage from '/Apps/Core/Backend/UI/Js/Classes/GrowlMessage';

class TaskList extends BaseComponent {

	getTemplate() {
		var DomainPicker = MyDomainPicker.createComponent();
		if (this.state.filter == 'Pavel') {
			DomainPicker = this.getComponent('DomainPicker');
		}
		return this.getReactTemplate();
	}

	componentDidMount() {
		this.fullListOfTasks = [];
		this.tasksStore = this.getStore('Todo.Todo.TasksStore');

		// Get initial data
		this.tasksStore.getData().then((data) => {
			this.fullListOfTasks = data;
			this.setState({todos: data});
		});

		// Listen to store changes
		this.onStore(this.tasksStore, (data) => this.setState({todos: data}));
	}

	getInitialState() {
		return {
			todos: [],
			filter: ''
		};
	}

	addTask() {
		var input = this.getNode('newTask');
		var taskName = input.value;
		this.trigger('Todo.Todo.addTodoAction', {task: taskName}).then(actionResult => {
			if (!actionResult.hasErrors()) {
				this.trigger('Core.UI.AddGrowl', new SuccessGrowl(taskName, 'New task created!'));
			} else {
				var message = new GrowlMessage();
				message.addMessage('Something went wrong');
				message.addMessage('Click to view details', this.errorDetails, ['First param', 'Second param']);
				var growl = new DangerGrowl(message, 'Failed to create new task', true);
				this.trigger('Core.UI.AddGrowl', growl);
			}
		});
		input.value = '';
	}

	errorDetails(firstParam, secondParam) {
		console.log(arguments)
	}

	removeTask(id) {
		this.trigger('Todo.Todo.removeTodoAction', id).then(actionResult => {
			if (!actionResult.hasErrors()) {
				this.trigger('Core.UI.AddGrowl', new InfoGrowl('Task deleted successfully!'));
			} else {
				this.trigger('Core.UI.AddGrowl', new WarningGrowl('Could not delete task!'));
			}
		});
	}

	onChangeFilter(newValue, oldValue) {
		if (!newValue) {
			return this.setState({todos: this.fullListOfTasks});
		}
		var filter = newValue.toLowerCase();
		var results = [];
		this.fullListOfTasks.forEach((task) => {
			if (task.task.toLowerCase().indexOf(filter) > -1) {
				results.push(task);
			}
		});
		this.setState({todos: results});
	}
}

export default TaskList;
