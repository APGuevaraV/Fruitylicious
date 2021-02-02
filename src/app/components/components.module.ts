import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductsGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    NavbarComponent,
    ProductsGridComponent
  ]
})
export class ComponentsModule { }
