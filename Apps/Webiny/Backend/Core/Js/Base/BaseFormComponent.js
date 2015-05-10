import BaseComponent from 'Webiny/Core/Base/BaseComponent';

class BaseFormComponent extends BaseComponent {

	getFormType(defaultType = 'native'){
		if(this.props.context){
			return this.props.context;
		}
		return this.props._form ? this.props._form.getFormType() : defaultType;
	}
}

export default BaseFormComponent;