import { Component, OnInit } from '@angular/core';
import { FruitserviceService } from '../../services/fruit.service';
import { Usuario } from '../../interfaces/producto.interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario:Usuario;
  constructor(public fruitService:FruitserviceService,
              public router:Router ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  signUp(form:NgForm){

    if (form.invalid) {
      Object.values(form.controls).forEach(control =>{
        control.markAsTouched();
      })
    }else{
      this.fruitService.signUp(this.usuario)
    .then(userCredentials =>{
      form.reset();
      console.log('Usuario creado');
      this.router.navigateByUrl('/home')
    })

    }
    
    
  }

}
