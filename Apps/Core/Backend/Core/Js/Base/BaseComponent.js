import BaseClass from '/Core/Core/Base/BaseClass';
import ComponentFactory from '/Core/Core/Component/ComponentFactory';
import Router from '/Core/Core/Router/Router';
import Registry from '/Core/Core/Registry';

/**
 * BaseComponent class is the main class all Webiny components should inherit from.
 * It handles construction of a valid React class, React element, etc.
 */
class BaseComponent extends BaseClass {

	constructor() {
		this.__listeners = [];
		this.__instanceId = Tools.createUID();
	}

	/**
	 * Create React component (will instantiate current Webiny component class and call 'getComponent()')
	 * NOTE: this is just a helper method
	 *
	 * @returns {*}
	 */
	static createComponent() {
		return (new this).getComponent();
	}

	/**
	 * Creates a React element ready for use in render() method
	 *
	 * @param props
	 * @returns {*}
	 */
	static createElement(props = {}) {
		if (!props.hasOwnProperty('key')) {
			props.key = Tools.createUID();
		}
		var cmp = (new this).getComponent();
		return React.createElement(cmp, props);
	}

	/**
	 * Get React template
	 * WARNING: DO NOT override this method!
	 * It is only used as a placeholder for Webiny HTPL parser.
	 */
	getReactTemplate() {
		// Dummy method
	}

	getInstanceId() {
		return this.__instanceId;
	}

	/**
	 * Get fully qualified component name
	 * Ex: 'Core.UI.Form'
	 * @returns {*}
	 */
	getFqn() {
		return this.getClassName();
	}

	getInitialState() {
		return {};
	}

	getDefaultProperties() {
		return {};
	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {

	}

	shouldComponentUpdate() {
		return true;
	}

	componentWillUpdate(nextProps, nextState) {

	}

	componentDidUpdate(prevProps, prevState) {

	}

	componentWillMount() {

	}

	componentWillUnmount() {

	}

	/**
	 * Creates a React component
	 * @returns {*}
	 */
	getComponent() {
		return ComponentFactory.createComponent(this);
	}
}

export default BaseComponent;