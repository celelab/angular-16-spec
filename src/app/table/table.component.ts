import { Component, Input } from '@angular/core';
import { Column, Item } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() items: Item[] = [];
  @Input() columns: Column[] = [];
}
