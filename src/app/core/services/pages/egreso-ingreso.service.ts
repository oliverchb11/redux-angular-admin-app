import { Injectable, inject } from '@angular/core';
import { IngresoEgresoData } from 'src/app/interfaces/core/pages/ingreso-egreso/ingreso-egreso-data.interface';
import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  doc,
  setDoc
} from '@firebase/firestore';

import { DocumentReference, Firestore, collectionData, docData, getFirestore  } from '@angular/fire/firestore';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class EgresoIngresoService {
  private ingresoEgresoCollection!: CollectionReference<DocumentData>;
  private firestore = inject(Firestore);
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
}
