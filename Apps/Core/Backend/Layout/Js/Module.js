import BaseModule from '/Core/Core/Base/BaseModule';
import Footer from '/Core/Layout/Components/Footer';
import Navigation from '/Core/Layout/Components/Navigation';
import DomainPicker from '/Core/Layout/Components/DomainPicker';
import Growler from '/Core/Layout/Components/Growler';
import Growl from '/Core/Layout/Components/Growl';
import AppStore from '/Core/Layout/Stores/AppStore';

class Layout extends BaseModule {

	registerComponents() {
		return {
			Navigation: Navigation,
			Footer: Footer,
			DomainPicker: DomainPicker,
			Growler: Growler,
			Growl: Growl
		};
	}

	registerStores(){
		return [
			AppStore
		];
	}
}

export default Layout;