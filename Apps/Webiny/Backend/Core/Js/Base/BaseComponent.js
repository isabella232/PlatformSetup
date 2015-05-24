import BaseClass from 'Webiny/Core/Base/BaseClass';
import ComponentFactory from 'Webiny/Core/Component/ComponentFactory';
import Router from 'Webiny/Core/Router/Router';
import Tools from 'Webiny/Core/Tools/Tools';
import Registry from 'Webiny/Core/Registry';

/**
 * BaseComponent class is the main class all Webiny components should inherit from.
 * It handles construction of a valid React class, React element, etc.
 */
class BaseComponent extends BaseClass {

	constructor() {
		super();
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
	 * Create react element from given component, props and inner content (children)
	 * @param component
	 * @param props
	 * @param content
	 * @returns {*}
	 */
	createElement(component, props = null, content = null){
		return React.createElement(component, props, content);
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
	 * Ex: 'Webiny.UI.Form'
	 * @returns {*}
	 */
	getFqn() {
		return this.getClassName();
	}

	/**
	 * Get DOM element of current component or of any child element/component referenced by ref
	 * @param ref Reference name (string) or null for current component
	 * @returns {*}
	 */
	getDOM(ref = null) {
		if (ref !== null){
			if(this.refs[ref].getDOM) {
				return this.refs[ref].getDOM();
			}
			return React.findDOMNode(this.refs[ref]);
		}
		return React.findDOMNode(this);
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