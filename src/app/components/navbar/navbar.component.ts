import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FruitserviceService } from '../../services/fruit.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public fruitService:FruitserviceService,
              private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.fruitService.logout();
    this.router.navigateByUrl('/home');
  }

}
