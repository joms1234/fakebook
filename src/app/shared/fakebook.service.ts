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
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { catchError, from, Observable, of, throwError } from 'rxjs';
import { RegistrationModel } from './fakebook.reg.model';
@Injectable({
  providedIn: 'root'
})
export class FakebookService {
  private contactsCollection: CollectionReference<DocumentData>;
  constructor(
    public afs: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  signIn(params: SignIn): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(
      params.email, params.password
    )).pipe(
      catchError((error: FirebaseError) => 
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }
  SignUp(userCredential: fakebook) {
    console.log(userCredential.name)
    return this.auth
      .createUserWithEmailAndPassword(userCredential.email, userCredential.password)
      .then((result) => {
       userCredential.id = result.user.uid;
        
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
      // this.SendVerificationMail();
       this.SetUserData(userCredential);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  SetUserData(user: fakebook) {
    console.log("nakapasok")

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `mytable/${user.id}`
    );
    const userData: RegistrationModel = {
      id: user.id,
      name: user.name,
    };
    return userRef.set(userData, {
      merge: true,
    });

    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(
    //   `UserTable/${user.uid}`
    // );
    // const userData: RegistrationModel = {
    //   name: user.name,
    //   id: user.uid,
    // };
    // return userRef.set(userData, {
    //   merge: true,
    // });
  }

  // SendVerificationMail() {
  //   return this.auth.currentUser
  //     .then((u: any) => u.sendEmailVerification())
  //     .then(() => {
  //       this.router.navigate(['verify-email-address']);
  //     });
  // }


  private translateFirebaseErrorMessage({code, message}: FirebaseError) {
    if (code === "auth/user-not-found") {
      return "User not found.";
    }
    if (code === "auth/wrong-password") {
      return "User not found.";
    }
    return message;
  }

  // private contactsCollection: CollectionReference<DocumentData>;
  // constructor(private firestore: Firestore) {
  //   this.contactsCollection = collection(this.firestore, 'myTable');
  // }

  upsertContact(UserData: fakebook) {
   
  //   if (!UserData.id) {
  //     UserData.id = new Date().getTime().toString();
  //   }
  //   const contactsDocumentReference = doc(
  //     this.firestore,
  //     `myTable/${UserData.id}`
  //   );
  //   console.log(UserData)
  // setDoc(contactsDocumentReference, { ...UserData });
  }
  
}
type SignIn = {
  email: string;
  password: string;
}

type FirebaseError = {
  code: string;
  message: string
};