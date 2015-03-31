import DomainPicker from '/Apps/Core/Layout/Js/Components/DomainPicker/DomainPicker';

class MyDomainPicker extends DomainPicker {

	getInitialState(){
		var state = super.getInitialState();
		state['label'] = 'Custom Domain Picker';
		return state;
	}

	getFqn() {
		return 'Core.Layout.MyDomainPickerComponent';
	}
}

export default MyDomainPicker;