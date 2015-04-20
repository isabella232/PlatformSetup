import BaseModule from '/Webiny/Core/Base/BaseModule'
import ListComponent from '/Todo/Todo/Components/TaskList'
import FormComponent from '/Todo/Todo/Components/TaskForm'
import TaskStore from '/Todo/Todo/Stores/TaskStore'
import ChatBox from '/Todo/Todo/Components/ChatBox'
import Http from '/Webiny/Core/Http'

TaskStore.setListView(ListComponent.createComponent());
TaskStore.setFormView(FormComponent.createComponent());

class Todo extends BaseModule {
	
	constructor(){
		super();
		
		Http.addRequestInterceptor(http => {
			console.log("Request inter", http);
			http.setParams({'_debug': true});
		});

		Http.addResponseInterceptor(http => {
			console.log("Response inter", http);
		});
	}

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