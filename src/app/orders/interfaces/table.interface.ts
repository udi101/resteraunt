import { tableState } from '../enums/table-state.enum';

export interface ITable {
  tableNumber: number;
  tableState: tableState;
}
