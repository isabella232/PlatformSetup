import BaseComponent from '/Core/Core/Base/BaseComponent';
import MyDomainPicker from '/Core/Layout/Components/MyDomainPicker';
import InfoGrowl from '/Core/UI/Classes/InfoGrowl';
import SuccessGrowl from '/Core/UI/Classes/SuccessGrowl';
import DangerGrowl from '/Core/UI/Classes/DangerGrowl';
import GrowlText from '/Core/UI/Classes/Message/GrowlText';
import GrowlLink from '/Core/UI/Classes/Message/GrowlLink';
import GrowlComponent from '/Core/UI/Classes/Message/GrowlComponent';

import TableView from '/Todo/Todo/Components/TasksTableView'
var TasksTableView = TableView.createComponent();

class TaskList extends BaseComponent {

	getTemplate() {
		var fields = ['index', 'id', 'task', 'createdOn'];
		var actions = ['edit', 'delete'];
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
				var growl = new DangerGrowl('Something went wrong', 'Failed to create a task', true);
				//growl.addMessage(new GrowlComponent(ChatBox));
				this.trigger('Core.UI.AddGrowl', growl);
			}
		});
		input.value = '';
	}

	/**
	 * Restore deleted task
	 * @param item Item data passed from removeTask()
	 * @param growl Growl component instance which triggers this method
	 */
	restoreTask(item, growl){
		growl.close();
		this.trigger('Todo.Todo.restoreTodoAction', item);
	}

	removeTask(item) {
		this.trigger('Todo.Todo.removeTodoAction', item).then(actionResult => {
			if (!actionResult.hasErrors()) {
				var undo = new GrowlLink('Undo', this.restoreTask, item, 'btn btn-info');
				var growl = new InfoGrowl(undo, 'Task deleted successfully!', true);
				this.trigger('Core.UI.AddGrowl', growl);
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

	taskModalHidden(){
		console.log("TaskList", "Modal closed callback")
	}

	taskModalHide(){
		console.log("TaskList", "Modal closing callback")
	}
}

export default TaskList;
