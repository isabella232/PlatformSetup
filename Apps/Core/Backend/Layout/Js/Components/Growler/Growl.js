import BaseComponent from '/Core/Base/BaseComponent';

class Growl extends BaseComponent {

	componentDidMount() {
		setTimeout(() => {
			this.props.onRemove(this.props.growl.id);
		}, 2000);
	}

	getTemplate(){
		var growl = this.props.growl;
		return this.getReactTemplate();
	}
}

export default Growl;