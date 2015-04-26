import BaseComponent from '/Webiny/Core/Base/BaseComponent';
import ListComponent from '/Todo/Todo/Components/TaskList';
import FormValidator from '/Webiny/UI/Classes/Form/FormValidator';

var TaskList = ListComponent.createComponent();

class TaskForm extends BaseComponent {

	getFqn(){
		return 'Todo.Todo.TaskForm';
	}

	getTemplate() {
		return React.createElement(Grid12, null,     React.createElement(Form, {name: "form"},         React.createElement(Grid6, null,             React.createElement(Input, {name: "id", label: "ID", grid: "6", valueLink: this.linkState("id"), placeholder: "ID", disabled: "disabled"}),             React.createElement(Input, {name: "createdOn", validate: "required", label: "Created", grid: "6", valueLink: this.linkState("createdOn"), placeholder: "Created", disabled: "disabled"}),             React.createElement(Input, {label: "Task", validate: "required,minLength:5", name: "task", grid: "12", valueLink: this.linkState("task"), placeholder: "Task"},                 React.createElement("validator", {name: "required"}, "Daj upisi nesto!"),                 React.createElement("validator", {name: "minLength"}, "A jesi skrt majke ti...")            ),             React.createElement(Input, {label: "Email", validate: "required,taskEmail", name: "email", grid: "12", valueLink: this.linkState("email"), placeholder: "Email"},                 React.createElement("validator", {name: "taskEmail"}, "Email ti ne valja!!")            )        ),         React.createElement(Grid6, null,             React.createElement("p", {style: {color: 'black'}},             "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."            )        )                    ),     React.createElement(Input, {label: "Polje", name: "polje", grid: "12", valueLink: this.linkState("email")}));
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
