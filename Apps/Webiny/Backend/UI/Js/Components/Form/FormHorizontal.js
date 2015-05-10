import Form from 'Webiny/UI/Components/Form';

class FormHorizontal extends Form {

	getFormType(){
		return 'horizontal';
	}

	getFormClass(){
		return 'form-horizontal';
	}
}

export default FormHorizontal;
