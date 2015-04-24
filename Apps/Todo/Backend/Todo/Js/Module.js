import BaseModule from '/Webiny/Core/Base/BaseModule'
import ListComponent from '/Todo/Todo/Components/TaskList'
import FormComponent from '/Todo/Todo/Components/TaskForm'
import TaskStore from '/Todo/Todo/Stores/TaskStore'
import ChatBox from '/Todo/Todo/Components/ChatBox'
import Http from '/Webiny/Core/Http'
import HttpResponse from '/Webiny/Core/Http/HttpResponse'

TaskStore.setListView(ListComponent.createComponent());
TaskStore.setFormView(FormComponent.createComponent());

class Todo extends BaseModule {

	constructor() {
		super();

		Http.addRequestInterceptor(httpRequest => {
			// httpRequest.setParams({'_debug': true});
			// httpRequest.addHeader('X-Pavel-Custom', 'custom-header');
			if (httpRequest.getUrl().indexOf('/item/') > -1) {
				var response = new HttpResponse({
					data: {
						data: {
							meta: [],
							data: [
								{
									completed: true,
									createdOn: "2015-01-18 21:35:30",
									id: "54bc27226803fa59048b456b",
									important: false,
									modifiedOn: "2015-04-10 20:15:51",
									settings: {},
									task: "Wow, REST works!"
								}
							]
						}
					},
					status: 200,
					statusText: 'Overriden'
				});
				//return response;
			}
		});
	}

	registerComponents() {
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