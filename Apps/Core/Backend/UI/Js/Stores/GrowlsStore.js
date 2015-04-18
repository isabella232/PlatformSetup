import BaseStore from '/Core/Core/Base/BaseStore';

class GrowlsStore extends BaseStore {

	getFqn() {
		return 'Core.UI.GrowlsStore';
	}

	init() {
		this.data = {};
		this.onAction('Core.UI.AddGrowl', this._onAddGrowl);
		this.onAction('Core.UI.RemoveGrowl', this._onRemoveGrowl);
		this.onAction('Core.UI.RemoveGrowls', this._onRemoveGrowls);
	}

	_onAddGrowl(growl) {
		this.data[growl.id] = growl;
		this.emitChange();
	}

	_onRemoveGrowl(id) {
		delete this.data[id];
		this.emitChange();
	}

	_onRemoveGrowls() {
		this.data = {};
		this.emitChange();
	}
}

export default GrowlsStore;