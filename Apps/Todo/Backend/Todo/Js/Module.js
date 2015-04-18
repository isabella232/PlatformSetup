import BaseModule from '/Core/Core/Base/BaseModule'
import ListComponent from '/Todo/Todo/Components/TaskList'
import FormComponent from '/Todo/Todo/Components/TaskForm'
import TasksStore from '/Todo/Todo/Stores/TasksStore'
import ChatBox from '/Todo/Todo/Components/ChatBox'

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