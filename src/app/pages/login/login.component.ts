import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/producto.interface';
import { FruitserviceService } from '../../services/fruit.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;
    
  constructor(public fruitService:FruitserviceService,
              public router:Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    
  }

  signInGoogle(){
    this.fruitService.signInGoogle();
    this.router.navigateByUrl('/home')
  }
  signInUserAndPass(form:NgForm){
      console.log('submit disparado');
      this.fruitService.signInUserAndPass(this.usuario)
      .then( userCredentials =>{
          form.reset();
          console.log('Usuario registrado entró');
          this.router.navigateByUrl('/home')
      })
      .catch(err =>{
        console.log(err);
      })
      
  }

}
