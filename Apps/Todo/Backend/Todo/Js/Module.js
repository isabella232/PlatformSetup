import BaseModule from '/Core/Base/BaseModule'
import ListComponent from '/Apps/Todo/Todo/Js/Components/TaskList'
import FormComponent from '/Apps/Todo/Todo/Js/Components/TaskForm'
import TasksStore from '/Apps/Todo/Todo/Js/Stores/TasksStore'
import ChatBox from '/Apps/Todo/Todo/Js/Components/ChatBox'

TasksStore.setListView(ListComponent.createComponent());
TasksStore.setFormView(FormComponent.createComponent());

class Todo extends BaseModule {

	registerComponents(){
		return {
			ChatBox: ChatBox
		};
	}

	registerRoutes() {
		return {
			TodoItemList: {
				Path: '/',
				Content: {
					MasterContent: {
						Component: TasksStore.getListView(),
						Props: {
							saveState: true
						}
					}
				}
			},
			TodoItemEdit: {
				Path: '/todo/item/:id',
				Content: {
					MasterContent: {
						Component: TasksStore.getFormView()
					}
				}
			}
		};
	}

	registerStores() {
		return [
			TasksStore
		];
	}
}

export default Todo;