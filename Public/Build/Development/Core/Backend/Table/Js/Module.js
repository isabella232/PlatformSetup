import BaseModule from '/Core/Core/Base/BaseModule'

import TableCmp from '/Core/Table/Components/Table';
import Tbody from '/Core/Table/Components/Tbody';
import Thead from '/Core/Table/Components/Thead';
import Tfoot from '/Core/Table/Components/Tfoot';
import Tr from '/Core/Table/Components/Tr';
import Th from '/Core/Table/Components/Th';
import Td from '/Core/Table/Components/Td';

class Table extends BaseModule {

	registerComponents() {
		return {
			Table: TableCmp,
			Tbody: Tbody,
			Thead: Thead,
			Tfoot: Tfoot,
			Tr: Tr,
			Td: Td,
			Th: Th
		}
	}
}

export default Table;