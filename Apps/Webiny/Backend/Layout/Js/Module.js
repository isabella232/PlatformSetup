import BaseModule from '/Webiny/Core/Base/BaseModule';
import Footer from '/Webiny/Layout/Components/Footer';
import Navigation from '/Webiny/Layout/Components/Navigation';
import DomainPicker from '/Webiny/Layout/Components/DomainPicker';
import Growler from '/Webiny/Layout/Components/Growler';
import Growl from '/Webiny/Layout/Components/Growl';
import AppStore from '/Webiny/Layout/Stores/AppStore';

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