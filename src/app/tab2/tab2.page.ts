import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase/firebase.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  group: FormGroup;

  constructor(private firebaseService: FirebaseService, private alrtCntrl: AlertController) {
    this.group = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log('FormGroup:', this.group.value, 'Valido:', this.group.status);

    if (this.group.valid) {
      this.firebaseService.addNoticia(this.group.value);
      this.group.reset();
    } else {
      console.error('Formulario no valido');
    }
  }

}
