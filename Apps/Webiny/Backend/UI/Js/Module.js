import BaseModule from '/Webiny/Core/Base/BaseModule';
// Components
import Input from '/Webiny/UI/Components/Input';
import Link from '/Webiny/UI/Components/Link';
import Form from '/Webiny/UI/Components/Form';
import FormGroup from '/Webiny/UI/Components/FormGroup';
import FormInline from '/Webiny/UI/Components/FormInline';
import FormHorizontal from '/Webiny/UI/Components/FormHorizontal';
import CheckboxGroup from '/Webiny/UI/Components/CheckboxGroup';
import Switch from '/Webiny/UI/Components/Switch';
import SwitchButton from '/Webiny/UI/Components/SwitchButton';
import GridRow from '/Webiny/UI/Components/GridRow';
import GridContainer from '/Webiny/UI/Components/GridContainer';
import Grid from '/Webiny/UI/Components/Grid';
import Grid12 from '/Webiny/UI/Components/Grid12';
import Grid6 from '/Webiny/UI/Components/Grid6';
import Grid4 from '/Webiny/UI/Components/Grid4';
import Modal from '/Webiny/UI/Components/Modal';
import ModalHeader from '/Webiny/UI/Components/ModalHeader';
import ModalBody from '/Webiny/UI/Components/ModalBody';
import ModalFooter from '/Webiny/UI/Components/ModalFooter';
// Stores
import GrowlsStore from '/Webiny/UI/Stores/GrowlsStore'

class UI extends BaseModule {

	registerComponents() {
		return {
			Input: Input,
			Link: Link,
			Form: Form,
			FormGroup: FormGroup,
			FormInline: FormInline,
			FormHorizontal: FormHorizontal,
			CheckboxGroup: CheckboxGroup,
			Switch: Switch,
			SwitchButton: SwitchButton,
			GridRow: GridRow,
			GridContainer: GridContainer,
			Grid: Grid,
			Grid12: Grid12,
			Grid6: Grid6,
			Grid4: Grid4,
			Modal: Modal,
			ModalBody: ModalBody,
			ModalHeader: ModalHeader,
			ModalFooter: ModalFooter
		};
	}

	registerStores() {
		return [
			GrowlsStore
		];
	}
}

export default UI;