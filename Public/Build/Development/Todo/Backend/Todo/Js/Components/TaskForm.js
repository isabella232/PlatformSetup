import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import ListComponent from '/Todo/Todo/Components/TaskList';

var TaskList = ListComponent.createComponent();

class TaskForm extends BaseComponent {

	getFqn(){
		return 'Todo.Todo.TaskForm';
	}

	getTemplate(){
		return React.createElement(Grid12, null,     React.createElement(Form, {name: "form"},         React.createElement(FormGroup, null,             React.createElement(Label, null, "ID"),             React.createElement(Input, {grid: "4", valueLink: this.linkState("id"), placeholder: "ID", disabled: "disabled"}),             React.createElement(Label, null, "Created"),             React.createElement(Input, {grid: "4", valueLink: this.linkState("createdOn"), placeholder: "Created", disabled: "disabled"})        ),         React.createElement(FormGroup, null,             React.createElement(Label, null, "Task"),             React.createElement(Input, {name: "task", grid: "10", valueLink: this.linkState("task"), placeholder: "Task"})        ),         React.createElement(FormGroup, null,             React.createElement(Switch, {label: "Important", valueLink: this.linkState("important"), buttons: "Yes|No"})                    ),         React.createElement(FormGroup, null,             React.createElement(Checkbox, {label: "Settings dev", valueLink: this.linkState("settings.dev"), bindChange: this.onChangeDev})        ),         React.createElement(FormGroup, null,             React.createElement(Checkbox, {label: "Completed", valueLink: this.linkState("completed")})        ),         React.createElement(FormGroup, null,             React.createElement("div", {className: "col-sm-offset-2 col-sm-10"},                 React.createElement("button", {className: "btn btn-success", type: "submit", onClick: this.saveTodo}, "Save")            )        )    ));
	}

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
