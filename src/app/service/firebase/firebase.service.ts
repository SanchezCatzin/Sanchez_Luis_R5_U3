import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { INoticia } from 'src/app/interfaces/noticia.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  getNoticias(): Observable<INoticia[]> {
    const noticias = collection(this.firestore, 'noticias');
    return collectionData(noticias, { idField: 'id' }) as Observable<INoticia[]>;
  }

  addNoticia(noticia: INoticia) {
    const noticiaRef = collection(this.firestore, 'noticias');
    return addDoc(noticiaRef, noticia);
  }

  deleteNoticia(index: string) {
    const noteDocRef = doc(this.firestore, 'noticias/' + index);
    return deleteDoc(noteDocRef);
  }

}
