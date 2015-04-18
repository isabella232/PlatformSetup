import DomainPicker from '/Core/Layout/Components/DomainPicker';

class MyDomainPicker extends DomainPicker {

	getInitialState(){
		var state = super.getInitialState();
		state['label'] = 'Custom Domain Picker';
		return state;
	}

}

export default MyDomainPicker;