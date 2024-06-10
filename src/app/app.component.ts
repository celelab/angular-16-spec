import { Component } from '@angular/core';
import type { Item, Column } from './table/Table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  columns: Column[] = [
    { key: 'name', label: 'Product Name' },
    { key: 'color', label: 'Color' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' }
  ];

  products: Item[] = [
    { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: 2999 },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: 1999 },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: 99 }
  ];
}
