import BaseModule from '/Webiny/Core/Base/BaseModule'
import ListComponent from '/Todo/Todo/Components/TaskList'
import FormComponent from '/Todo/Todo/Components/TaskForm'
import TaskStore from '/Todo/Todo/Stores/TaskStore'
import ChatBox from '/Todo/Todo/Components/ChatBox'

TaskStore.setListView(ListComponent.createComponent());
TaskStore.setFormView(FormComponent.createComponent());

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
						Component: TaskStore.getListView(),
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
						Component: TaskStore.getFormView()
					}
				}
			}
		};
	}

	registerStores() {
		return [
			TaskStore
		];
	}
}

export default Todo;