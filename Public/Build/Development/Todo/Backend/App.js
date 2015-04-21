import DeveloperTools from '/Webiny/Core/Tools/DeveloperTools';
import TodoTodoModule from '/Todo/Todo/Module';

class Todo {

	constructor() {
		new TodoTodoModule();

		var actions = {"Todo":{"TaskForm":["Todo.Todo.TaskCreate","Todo.Todo.TaskUpdate"],"TaskList":["Todo.Todo.TaskCreate","Core.UI.AddGrowl","Todo.Todo.TaskRestore","Todo.Todo.TaskDelete"]}};
		DeveloperTools.registerComponentActions('Todo', actions);
	}
}

export default Todo;