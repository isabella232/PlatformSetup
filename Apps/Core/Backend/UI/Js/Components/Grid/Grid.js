import BaseComponent from '/Core/Core/Base/BaseComponent';

class Grid extends BaseComponent {

	getTemplate() {
		var classes = {};
		classes['col-xs-'+this.props.xs] = true;
		classes['col-sm-'+this.props.sm] = true;

		return '<div class={classes}>{this.props.children}</div>';
	}
}

export default Grid;
