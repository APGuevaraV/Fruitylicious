import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Producto[]
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('productos').valueChanges()
    .subscribe( (res:Producto[])=>{
      this.products = res;
      console.log(this.products);
    })
  }

}
