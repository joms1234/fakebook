import { Injectable } from '@angular/core';
import { fakebook } from './fakebook.model';
import {
  collectionData,
  Firestore,
  DocumentData,
  collection,
  CollectionReference,
  setDoc,
  doc,
  deleteDoc,
  getDoc,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FakebookService {
  private contactsCollection: CollectionReference<DocumentData>;
  constructor(private firestore: Firestore) {
    this.contactsCollection = collection(this.firestore, 'myTable');
  }

  upsertContact(UserData: fakebook) {
    console.log(UserData)
    if (!UserData.id) {
      UserData.id = new Date().getTime().toString();
    }
    const contactsDocumentReference = doc(
      this.firestore,
      `myTable/${UserData.id}`
    );
  setDoc(contactsDocumentReference, { ...UserData });
  }
  
}
