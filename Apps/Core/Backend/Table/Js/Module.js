import BaseModule from '/Core/Base/BaseModule'

import TableCmp from '/Apps/Core/Table/Js/Components/Table';
import Tbody from '/Apps/Core/Table/Js/Components/Tbody';
import Thead from '/Apps/Core/Table/Js/Components/Thead';
import Tfoot from '/Apps/Core/Table/Js/Components/Tfoot';
import Tr from '/Apps/Core/Table/Js/Components/Tr';
import Th from '/Apps/Core/Table/Js/Components/Th';
import Td from '/Apps/Core/Table/Js/Components/Td';

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