import Form from 'Webiny/UI/Components/Form';

class FormInline extends Form {

	getFormType(){
		return 'inline';
	}

	getFormClass(){
		return 'form-inline';
	}
}

export default FormInline;
