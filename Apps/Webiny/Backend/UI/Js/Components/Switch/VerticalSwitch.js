class VerticalSwitch extends Webiny.Base.InputComponent {

	getInitialState() {
		var defaultGrid = {
			'col-xs-12': true,
			'col-sm-12': true
		};

		var gridMap = {
			6: {
				'col-xs-6': true,
				'col-sm-6': true
			}
		};
		return {
			css: gridMap[this.props.grid] || defaultGrid
		};
	}

}

export default VerticalSwitch;
