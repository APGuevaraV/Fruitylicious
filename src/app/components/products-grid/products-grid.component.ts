import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @Input() products:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
