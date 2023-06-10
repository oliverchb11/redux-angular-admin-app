import { Injectable, OnDestroy, inject } from '@angular/core';
import { registerData } from 'src/app/interfaces/core/auth/register/register-data.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';


// import { AngularFirestore } from '@angular/fire/compat/'
import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  doc,
  setDoc
} from '@firebase/firestore';

import { DocumentReference, Firestore, collectionData, docData  } from '@angular/fire/firestore';

import { LoginData } from 'src/app/interfaces/core/auth/login/login-data.interface';
import { Observable, Subscription, map } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as auth from 'src/app/auth/auth.actions';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{

  private auth = inject(AngularFireAuth)
  private firestore = inject(Firestore)
  private store = inject(Store<AppState>);
  private subscribe!: Subscription 
  public idFields: any ;
  private user!: User | null
  constructor() {
    
  }

  public initAuthListener(){  
    this.auth.authState.subscribe((fbuser: any)=> {      
      this.setUserStore(fbuser)
    })
  }


  setUserStore(fbuser: any){
      if(fbuser !== null){
        this.subscribe = this.getUserById(`${fbuser.uid}/users`).subscribe((userFirabse: any) => {
        const user = User.formFireStore(userFirabse)
        this.user = user;
        console.log({...this.user});
        
        this.store.dispatch(auth.setUser({user}))
      })
    }else{
      this.user = null;
      this.store.dispatch(auth.unSetUser())
    }
  }

  get getUser(){
    return {...this.user};
  }

   createUser({user, email, password}: registerData){
    return this.auth.createUserWithEmailAndPassword(email,password)
    .then(fbUser => {
      let id = fbUser.user!.uid
      const newUser = new User(id, user ,email);
      this.createDocumentUser(newUser, id)
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


  createDocumentUser(newUser: User, id: string): Promise<void>{
    console.log(id);
    let document  = doc(this.firestore, id + '/users');
    return setDoc( document, {...newUser})
  }

  getUserById(id: string): Observable<DocumentData> {
    const authDocumentReference = doc(this.firestore, id);
    let docs = docData(authDocumentReference, { idField: 'id' });
    return docs
  }

  ngOnDestroy(): void {
   this.subscribe.unsubscribe()
  }


}
