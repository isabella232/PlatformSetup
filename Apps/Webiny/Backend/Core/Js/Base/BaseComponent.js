import BaseClass from 'Webiny/Core/Base/BaseClass';
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
}

export default BaseComponent;