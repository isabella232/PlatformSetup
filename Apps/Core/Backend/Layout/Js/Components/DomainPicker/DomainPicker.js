import BaseComponent from '/Core/Base/BaseComponent';

class DomainPicker extends BaseComponent {

	getInitialState() {
		return {
			domains: [
				{name: "www.booking.com"},
				{name: "www.facebook.com"},
				{name: "www.google.com"}
			]
		}
	}
}

export default DomainPicker;
