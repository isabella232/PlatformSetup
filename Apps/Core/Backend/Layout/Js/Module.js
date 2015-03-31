import BaseModule from '/Core/Base/BaseModule';
import Footer from '/Apps/Core/Layout/Js/Components/Footer/Footer';
import Navigation from '/Apps/Core/Layout/Js/Components/Navigation/Navigation';
import DomainPicker from '/Apps/Core/Layout/Js/Components/DomainPicker/DomainPicker';
import MyDomainPicker from '/Apps/Core/Layout/Js/Components/MyDomainPicker/MyDomainPicker';

class Layout extends BaseModule {

	registerComponents() {
		return {
			Navigation: Navigation,
			Footer: Footer,
			DomainPicker: DomainPicker,
			//DomainPicker: MyDomainPicker
		};
	}
}

export default Layout;