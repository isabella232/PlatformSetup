import Footer from 'Webiny/Layout/Components/Footer';
import Navigation from 'Webiny/Layout/Components/Navigation';
import DomainPicker from 'Webiny/Layout/Components/DomainPicker';
import SystemArchitecture from 'Webiny/Layout/Components/SystemArchitecture';
import Growler from 'Webiny/Layout/Components/Growler';
import Growl from 'Webiny/Layout/Components/Growl';
import AppStore from 'Webiny/Layout/Stores/AppStore';

class Layout extends Webiny.Base.Module {

	registerComponents() {
		return {
			Navigation: Navigation,
			Footer: Footer,
			DomainPicker: DomainPicker,
			Growler: Growler,
			Growl: Growl,
			SystemArchitecture: SystemArchitecture
		};
	}

	registerStores(){
		return [
			AppStore
		];
	}
}

export default Layout;