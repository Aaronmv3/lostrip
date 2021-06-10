import { Injectable } from '@angular/core';
import  firebase from 'firebase/app';
import "firebase/auth"
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private afAuth: AngularFireAuth) {
   }

   registrar(email,pass) {
     return firebase.auth().createUserWithEmailAndPassword(email,pass);
   }

   loggin(email, pass){
    return firebase.auth().signInWithEmailAndPassword(email,pass).then(mensaje=>{
      localStorage.setItem('Logged', "true");
    });

   }

   verificacion(){
     firebase.auth().currentUser.sendEmailVerification().then(mensaje=>{
     }).catch(error=>{
       console.log(error.mesagge);
     })
   }
   logout(){
     firebase.auth().signOut().then(mesaje=>{
       if(localStorage.getItem("Logged")){
         localStorage.removeItem("Logged");
       }
       
     }).catch(error=>{
       console.log(error);
       
     })
   }
   obtenerUsuario(){
     return firebase.auth().currentUser;
   }

   reseteoContrasena(email){
      firebase.auth().sendPasswordResetEmail(email).then(mensaje=>{
      }).catch(error=>{
        console.log(error.mesagge);
      });
   }

}
