import BaseStore from '/Core/Base/BaseStore';

class GrowlsStore extends BaseStore {

	getFqn() {
		return 'Core.UI.GrowlsStore';
	}

	init() {
		this.data = [];
		this.onAction('Core.UI.AddGrowl', this._onAddGrowl);
		this.onAction('Core.UI.RemoveGrowl', this._onRemoveGrowl);
	}

	_onAddGrowl(growl) {
		this.data.push(growl);
		this.emitChange();
	}

	_onRemoveGrowl(id) {
		this.data.forEach((item, index) => {
			if (id == item.id) {
				delete this.data[index];
				this.emitChange();
			}
		});
	}
}

export default GrowlsStore;