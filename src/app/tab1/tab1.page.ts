import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase/firebase.service';
import { INoticia } from '../interfaces/noticia.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  noticias!: INoticia[];

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getNoticias().subscribe((res) => {
      this.noticias = res;
      console.log(this.noticias);
    });
  }

  onDelete(index: string) {
    this.firebaseService.deleteNoticia(index);
  }
}
