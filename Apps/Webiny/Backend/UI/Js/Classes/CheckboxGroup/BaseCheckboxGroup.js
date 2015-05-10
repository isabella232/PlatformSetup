import BaseInputComponent from 'Webiny/Core/Base/BaseInputComponent';
import CheckboxComponent from 'Webiny/UI/Components/Checkbox';
import Tools from 'Webiny/Core/Tools/Tools';

var CheckboxCmp = CheckboxComponent.createComponent();

class BaseCheckboxGroup extends BaseInputComponent {

	getDefaultProperties() {
		return {
			disabled: false,
			label: ''
		}
	}

	getCheckboxComponent(){
		return CheckboxCmp;
	}

	componentWillMount() {
		super.componentWillMount();

		// Parse <checkbox> tags and create array of checkbox props and onChange callback methods
		this.checkboxes = [];
		React.Children.map(this.props.children, (child) => {
			var value = child.props.value;

			this.checkboxes.push({
				label: child.props.children,
				bind: 'data.' + value,
				grid: child.props.grid || 3
			});


			var callbackName = 'onChangeData' + _.capitalize(_.camelCase(value));

			// Create onChange callback which will be executed when inner Checkbox component is changed
			this[callbackName] = (newValue) => {
				var partialState = this.state.data || {};

				if (!newValue) {
					delete partialState[value];
				} else {
					partialState[value] = true;
				}

				this.props.valueLink.requestChange(Object.keys(partialState), this.props.bindChange || null);
			};
		});
	}

	/**
	 * When we receive new props, we need to convert array into an object for easier checkbox handling
	 * and use that as local state.
	 *
	 * @param nextProps
	 */
	componentWillReceiveProps(nextProps) {
		if (nextProps.valueLink.value) {
			var data = {};
			Tools.keys(nextProps.valueLink.value).forEach(key => {
				data[nextProps.valueLink.value[key]] = true;
			});

			this.setState({data: data});
		}
	}
}

export default BaseCheckboxGroup;