import BaseModule from '/Core/Base/BaseModule';
import Footer from '/Apps/Core/Layout/Js/Components/Footer';
import Navigation from '/Apps/Core/Layout/Js/Components/Navigation';
import DomainPicker from '/Apps/Core/Layout/Js/Components/DomainPicker';

class Layout extends BaseModule {

	registerComponents() {
		return {
			Navigation: Navigation,
			Footer: Footer,
			DomainPicker: DomainPicker
		};
	}
}

export default Layout;