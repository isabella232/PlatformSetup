import BaseComponent from '/Core/Base/BaseComponent';
import MyDomainPicker from '/Apps/Core/Layout/Js/Components/MyDomainPicker';
import Growl from '/Apps/Core/Backend/UI/Js/Classes/Growl';

class TaskList extends BaseComponent {

	getTemplate() {
		var DomainPicker = MyDomainPicker.createComponent();
		if(this.state.filter == 'Pavel'){
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
		this.onStore(this.tasksStore, (data) => {
			this.setState({todos: data});
		});
	}

	getInitialState() {
		return {
			todos: [],
			filter: ''
		};
	}

	addTask() {
		var input = this.getNode('newTask');
		this.trigger('Core.UI.AddGrowl', new Growl(input.value));
		return;
		this.trigger('Todo.Todo.addTodoAction', {task: input.value});
		input.value = '';
	}

	removeTask(id) {
		//var id = $(e.target).attr('data-id');
		this.trigger('Todo.Todo.removeTodoAction', id);
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
