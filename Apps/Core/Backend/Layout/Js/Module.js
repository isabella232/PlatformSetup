import BaseModule from '/Core/Base/BaseModule';
import Footer from '/Apps/Core/Layout/Js/Components/Footer/Footer';
import Navigation from '/Apps/Core/Layout/Js/Components/Navigation/Navigation';
import DomainPicker from '/Apps/Core/Layout/Js/Components/DomainPicker/DomainPicker';

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