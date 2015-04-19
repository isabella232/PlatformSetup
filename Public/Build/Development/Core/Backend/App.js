import CoreCoreModule from '/Core/Core/Module';
import CoreLayoutModule from '/Core/Layout/Module';
import CoreTableModule from '/Core/Table/Module';
import CoreUIModule from '/Core/UI/Module';

class Core {

	constructor() {
		new CoreCoreModule();
		new CoreLayoutModule();
		new CoreTableModule();
		new CoreUIModule();
	}
}

export default Core;