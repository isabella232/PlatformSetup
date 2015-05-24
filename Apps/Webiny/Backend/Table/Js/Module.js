import TableCmp from 'Webiny/Table/Components/Table';
import Tbody from 'Webiny/Table/Components/Tbody';
import Thead from 'Webiny/Table/Components/Thead';
import Tfoot from 'Webiny/Table/Components/Tfoot';
import Tr from 'Webiny/Table/Components/Tr';
import Th from 'Webiny/Table/Components/Th';
import Td from 'Webiny/Table/Components/Td';

class Table extends Webiny.Base.Module {

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