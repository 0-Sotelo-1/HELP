// Angular Imports
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc, query, setDoc, updateDoc, where } from '@angular/fire/firestore';

// Angular Material Imports
import { MatSnackBar } from '@angular/material/snack-bar';
import { SisterCompanyData } from '@promter/models';

// General NodeJs Modules
// Framework Imports
// App Imports
@Injectable({  providedIn: 'root'})
export class SisterCompaniesService {

  constructor(
    private firestore: Firestore,
    public snackBar: MatSnackBar

  ) { }


  //Create
  createSisterCompany(sisterCompany: Partial<SisterCompanyData>){
    const sistercompanyRef = doc(collection(this.firestore, 'sister_companies'));

    sisterCompany ['isArchived']= false;
    setDoc (sistercompanyRef, sisterCompany);

    sisterCompany['id']= sistercompanyRef.id;
    return sisterCompany;
  }

  getSisterCompany$(isArchived: boolean = false){
    return collectionData(query(collection(this.firestore, 'sister_companies'), where('isArchived', '==', isArchived)), { idField: 'id' });
  }

  //Update
  updateSisterCompany(sisterCompanyId: SisterCompanyData['id'],newData: Partial<SisterCompanyData>){
    const sistercompanyRef = doc (this.firestore, 'sister_companies', sisterCompanyId);
    return updateDoc (sistercompanyRef, {...newData});
  }
}
