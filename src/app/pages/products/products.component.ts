import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { FruitserviceService } from '../../services/fruit.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Producto[]
  constructor(private fruitService:FruitserviceService) { }

  ngOnInit(): void {
    this.fruitService.cargarProductos().subscribe(res=>{
      this.products=res
    })
  }





}
