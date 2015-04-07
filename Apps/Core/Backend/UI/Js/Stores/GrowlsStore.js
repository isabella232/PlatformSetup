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

	_onRemoveGrowl(growl) {
		this.data.forEach((item, index) => {
			if (growl == item) {
				this.data.splice(index, 1);
			}
		});
	}
}

export default GrowlsStore;