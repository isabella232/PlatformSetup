import BaseComponent from '/Webiny/Core/Base/BaseComponent';

class BaseInputComponent extends BaseComponent {

	componentWillMount(){
		if(this.props._attachToForm){
			var customMessages = {};
			if(this.props.children) {
				this.props.children.forEach(item => {
					if (item.props.children) {
						customMessages[item.props.name] = item.props.children;
					}
				});
			}
			this.props._attachToForm(this, customMessages);
		}
	}

	componentWillUnmount() {
		if(this.props._detachFromForm){
			this.props._detachFromForm(this);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(!prevState || !this.props.valueLink){
			return;
		}

		var isValueChanged = () => {
			return this.props.valueLink.value != prevProps.valueLink.value;
		};
		
		if (isValueChanged()) {
			var validation = false;
			if(this.props._validate) {
				validation = this.props._validate(this);
				if(validation.valid){
					this.setState({_valid: true});
					this.props._updateModel(this);
				} else {
					this.setState({
						_valid: false,
						_validationError: validation.message
					});
				}
			}
		}
	}
}

export default BaseInputComponent;