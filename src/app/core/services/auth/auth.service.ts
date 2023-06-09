import { Injectable, inject } from '@angular/core';
import { registerData } from 'src/app/interfaces/core/auth/register/register-data.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

// import { AngularFirestore } from '@angular/fire/compat/'

import { LoginData } from 'src/app/interfaces/core/auth/login/login-data.interface';
import { map } from 'rxjs';
import { User } from 'src/app/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(AngularFireAuth)
  private firestore = inject(Firestore)

  public initAuthListener(){
    this.auth.authState.subscribe((fbuser)=> {
      console.log(fbuser);
    })
  }

   createUser({user, email, password}: registerData){
    return this.auth.createUserWithEmailAndPassword(email,password)
    .then(fbUser => {
      let id = fbUser.user!.uid
      console.log(id);
      const newUser = new User(id, user ,email);
      const collectionInstas = collection(this.firestore, 'users');
      return addDoc(collectionInstas, {...newUser})
    })
  }

  public login({email, password}: LoginData): Promise<any>{
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  public logout(){
   return this.auth.signOut()
  }

  public isAuth(){
    return this.auth.authState.pipe(
      map(fbuser => fbuser !== null)
    )
  }
}
