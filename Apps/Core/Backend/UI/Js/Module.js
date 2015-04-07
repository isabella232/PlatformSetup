import BaseModule from '/Core/Base/BaseModule';
// Components
import Label from '/Apps/Core/UI/Js/Components/Label';
import Input from '/Apps/Core/UI/Js/Components/Input';
import Link from '/Apps/Core/UI/Js/Components/Link';
import Form from '/Apps/Core/UI/Js/Components/Form';
import FormGroup from '/Apps/Core/UI/Js/Components/FormGroup';
import FormInline from '/Apps/Core/UI/Js/Components/FormInline';
import Checkbox from '/Apps/Core/UI/Js/Components/Checkbox';
import Switch from '/Apps/Core/UI/Js/Components/Switch';
import SwitchButton from '/Apps/Core/UI/Js/Components/SwitchButton';
import GridRow from '/Apps/Core/UI/Js/Components/GridRow';
import GridContainer from '/Apps/Core/UI/Js/Components/GridContainer';
import Grid from '/Apps/Core/UI/Js/Components/Grid';
import Grid12 from '/Apps/Core/UI/Js/Components/Grid12';
import Grid6 from '/Apps/Core/UI/Js/Components/Grid6';
import Grid4 from '/Apps/Core/UI/Js/Components/Grid4';
// Stores
import GrowlsStore from '/Apps/Core/UI/Js/Stores/GrowlsStore'

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
			Grid4: Grid4
		};
	}

	registerStores() {
		return [
			GrowlsStore
		];
	}
}

export default UI;