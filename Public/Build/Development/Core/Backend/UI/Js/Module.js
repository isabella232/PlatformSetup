import BaseModule from '/Core/Core/Base/BaseModule';
// Components
import Label from '/Core/UI/Components/Label';
import Input from '/Core/UI/Components/Input';
import Link from '/Core/UI/Components/Link';
import Form from '/Core/UI/Components/Form';
import FormGroup from '/Core/UI/Components/FormGroup';
import FormInline from '/Core/UI/Components/FormInline';
import Checkbox from '/Core/UI/Components/Checkbox';
import Switch from '/Core/UI/Components/Switch';
import SwitchButton from '/Core/UI/Components/SwitchButton';
import GridRow from '/Core/UI/Components/GridRow';
import GridContainer from '/Core/UI/Components/GridContainer';
import Grid from '/Core/UI/Components/Grid';
import Grid12 from '/Core/UI/Components/Grid12';
import Grid6 from '/Core/UI/Components/Grid6';
import Grid4 from '/Core/UI/Components/Grid4';
import Modal from '/Core/UI/Components/Modal';
import ModalHeader from '/Core/UI/Components/ModalHeader';
import ModalBody from '/Core/UI/Components/ModalBody';
import ModalFooter from '/Core/UI/Components/ModalFooter';
// Stores
import GrowlsStore from '/Core/UI/Stores/GrowlsStore'

class UI extends BaseModule {

	registerComponents() {
		return {
			Label: Label,
			Input: Input,
			Link: Link,
			Form: Form,
			FormGroup: FormGroup,
			FormInline: FormInline,
			Checkbox: Checkbox,
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