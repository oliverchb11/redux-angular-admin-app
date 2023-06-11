import { Injectable, inject } from '@angular/core';
import { IngresoEgresoData } from 'src/app/interfaces/core/pages/ingreso-egreso/ingreso-egreso-data.interface';
import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  where,
  query,orderBy
} from '@firebase/firestore';

import { DocumentReference, Firestore, collectionData, docData, getFirestore  } from '@angular/fire/firestore';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { setIngresoEgreso } from 'src/app/ingreso-egreso/ingreso-egreso.actions';
@Injectable({
  providedIn: 'root'
})
export class EgresoIngresoService {
  private ingresoEgresoCollection!: CollectionReference<DocumentData>;
  private firestore = inject(Firestore);
  private store = inject(Store<AppState>);
  private auth = inject(AuthService);
  public id: string | undefined 


  public createIncomeAndExpenses(data: IngresoEgreso){
    const db = getFirestore(this.firestore.app);
    const collectionInstance = collection(
      db,
      `${this.auth.getUser.uid}`,
      'ingresos-egresos',
      'items'
    );
    return addDoc(collectionInstance, {...data})
  }

  public getItems(id: string): Observable<DocumentData[]>{
      this.id = id;
      const db = getFirestore(this.firestore.app);
      
      const collectionInstance = collection(
        db,
        `${id}`,
        'ingresos-egresos',
        'items'
      );
      const q = query(collectionInstance, orderBy("tipo", 'desc'));
    return  collectionData(q, {idField: 'uid'})
  }

  public deleteItem(id: string | undefined): Promise<void>{
    const db = getFirestore(this.firestore.app);
    const collectionInstance = doc(
      db,
      `${this.id}`,
      'ingresos-egresos',
      'items',
      `${id}`,
    );
   return deleteDoc(collectionInstance)
  }
}
