import { Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { tableState } from '@app/orders/enums/table-state.enum';
import { ITable } from '@app/orders/interfaces';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'table-select',
  templateUrl: './table-select.component.html',
  styleUrls: ['./table-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSelectComponent implements OnInit {
  @Input() tables: Array<ITable>;
  @Output() tableSelected = new EventEmitter<ITable>();
  constructor() { }

  ngOnInit(): void {
  }

  setClass(table: ITable) {
    switch (table.tableState) {
      case tableState.free:
        return 'free';
      case tableState.occupied:
        return 'occupied';

    }
  }

  setCurrentTable(table: ITable) {
    if (table.tableState === tableState.free) {
      this.tableSelected.emit(table);
    }
  }
}
