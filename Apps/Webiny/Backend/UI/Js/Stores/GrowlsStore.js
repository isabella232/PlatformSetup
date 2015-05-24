class GrowlsStore extends Webiny.Base.Store {

	getFqn() {
		return 'Webiny.UI.GrowlsStore';
	}

	init() {
		this.data = {};
		this.onAction('Webiny.UI.AddGrowl', this._onAddGrowl);
		this.onAction('Webiny.UI.RemoveGrowl', this._onRemoveGrowl);
		this.onAction('Webiny.UI.RemoveGrowls', this._onRemoveGrowls);
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