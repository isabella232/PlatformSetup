class DomainPicker extends Webiny.Base.Component {

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
