import BaseComponent from '/Core/Core/Base/BaseComponent';

class TasksTableView extends BaseComponent {

	getFqn(){
		return 'Todo.Todo.TasksTableView';
	}

	getTemplate() {
		return React.createElement(Table, null,     React.createElement(Thead, null,         React.createElement(Tr, null,                     function(){if(this.props.fields.indexOf('index') > -1){return React.createElement(Th, null, "#")}}.bind(this)(),                     function(){if(this.props.fields.indexOf('id') > -1){return React.createElement(Th, null, "ID")}}.bind(this)(),                     function(){if(this.props.fields.indexOf('task') > -1){return React.createElement(Th, null, "Task")}}.bind(this)(),                     function(){if(this.props.fields.indexOf('createdOn') > -1){return React.createElement(Th, null, "Created On")}}.bind(this)(),                     React.createElement(Th, null, "Actions")        )    ),     React.createElement(Tbody, null,     Tools.keys(this.props.items).map(function(i)  {var item = this.props.items[i]; return React.createElement(Tr, {key: i, className: Tools.classSet({danger: item.important, success: item.completed})},                     function(){if(this.props.fields.indexOf('index') > -1){return React.createElement(Td, null, i+1)}}.bind(this)(),                     function(){if(this.props.fields.indexOf('id') > -1){return React.createElement(Td, null, item.id)}}.bind(this)(),                     function(){if(this.props.fields.indexOf('task') > -1){return React.createElement(Td, null, item.task)}}.bind(this)(),                     function(){if(this.props.fields.indexOf('createdOn') > -1){return React.createElement(Td, null, item.createdOn)}}.bind(this)(),                     React.createElement(Td, null,                                 function(){if(this.props.actions.indexOf('edit') > -1){return React.createElement(Link, {className: "btn btn-primary", route: "TodoItemEdit", params: item}, "Edit")}}.bind(this)(),                                 function(){if(this.props.actions.indexOf('delete') > -1){return React.createElement("button", {className: "btn btn-danger", onClick: function()  {this.props.onDelete(item)}.bind(this)}, "Delete")}}.bind(this)(),                                 function(){if(this.props.actions.indexOf('select') > -1){return React.createElement("button", {className: "btn btn-success", onClick: function()  {this.props.onSelect(item)}.bind(this)}, "Select")}}.bind(this)()                            )        )}.bind(this))    ));
	}
}

export default TasksTableView;
