import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import ListComponent from '/Todo/Todo/Components/TaskList';
import FormValidator from '/Webiny/UI/Classes/Form/FormValidator';

var TaskList = ListComponent.createComponent();

class TaskForm extends BaseComponent {

	getFqn(){
		return 'Todo.Todo.TaskForm';
	}

	getTemplate() {
		return React.createElement(Grid12, null,     React.createElement(Form, {name: "form"},         React.createElement(Input, {name: "id", label: "ID", grid: "6", valueLink: this.linkState("id"), placeholder: "ID", disabled: "disabled"}),         React.createElement(Input, {name: "createdOn", validate: "required", label: "Created", grid: "6", valueLink: this.linkState("createdOn"), placeholder: "Created", disabled: "disabled"}),         React.createElement(Input, {label: "Task", validate: "required,minLength:5", name: "task", grid: "4", valueLink: this.linkState("task"), placeholder: "Task"},         React.createElement("validator", {name: "required"}, "Daj upisi nesto!"),         React.createElement("validator", {name: "minLength"}, "A jesi skrt majke ti...")        ),         React.createElement(Input, {label: "Email", validate: "required,taskEmail", name: "email", grid: "4", valueLink: this.linkState("email"), placeholder: "Email"},         React.createElement("validator", {name: "taskEmail"}, "Email ti ne valja!!")        ),         React.createElement(Many2One, null),         React.createElement("div", {className: "clearfix"}),         React.createElement(Switch, {grid: "6", label: "Important", valueLink: this.linkState("important"), buttons: "Yes|No"}),         React.createElement(Switch, {grid: "6", label: "Completed", valueLink: this.linkState("completed")}),                 React.createElement(CheckboxGroup, {ref: "checkBox", label: "Settings", valueLink: this.linkState("settings")},             React.createElement("checkbox", {value: "boring"}, "Boring"),             React.createElement("checkbox", {value: "difficult", grid: "4"}, "Difficult"),             React.createElement("checkbox", {value: "short"}, "Short")        ),         React.createElement(CheckboxGroup, {ref: "config", label: "Config", valueLink: this.linkState("config"), bindChange: this.configChanged},             React.createElement("checkbox", {value: "auto-bind", grid: "6"}, "Auto-bind"),             React.createElement("checkbox", {value: "register-classes", grid: "6"}, "Register classes")        )    )    );
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
