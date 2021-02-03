import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto, Usuario } from '../interfaces/producto.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitserviceService {

  isAutenthicated = false;
  private itemsCollection : AngularFirestoreCollection<Producto>
  public products :Producto[];
  constructor(private db:AngularFirestore,
              public afAuth:AngularFireAuth) { 
              
          this.afAuth.authState.subscribe(user=>{
            if(user){
              this.isAutenthicated =true
            }
            else{
              this.isAutenthicated =false
            }
          })

  }

  
  cargarProductos(){
    if(this.isAutenthicated){
      this.itemsCollection = this.db.collection<Producto>('productos');
      return this.itemsCollection.valueChanges();

    }else{
     return of ([]);
    }
  }

  signInGoogle(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signInUserAndPass(user:Usuario){
    return this.afAuth.signInWithEmailAndPassword(user.email,user.password);
  }

  signUp(user:Usuario){
    return this.afAuth.createUserWithEmailAndPassword(user.email,user.password)
  }

  logout(){
    this.afAuth.signOut();
  }



  


}
