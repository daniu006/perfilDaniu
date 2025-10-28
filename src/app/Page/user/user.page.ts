import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonRouterLink, 
  IonButton,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  ModalController
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ClueModalComponent } from '../clue-modal/clue-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonRouterLink,
    IonCard,
    IonCardContent,
    IonAvatar,
    IonImg,
    IonItem,
    IonLabel,
    IonInput
  ],
})
export class UserPage implements OnInit {
  userData = {
    name: '',
    password: ''
  };

  // Credenciales válidas (puedes cambiarlas)
  private readonly VALID_USERNAME = 'daniu';
  private readonly VALID_PASSWORD = '5612';

  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {}

  async registrar() {
    // Validar que los campos no estén vacíos
    if (!this.userData.name || !this.userData.password) {
      await this.showModal('error', 'Por favor, complete todos los campos');
      return;
    }

    // Validar credenciales
    if (this.userData.name === this.VALID_USERNAME && 
        this.userData.password === this.VALID_PASSWORD) {
      // Credenciales correctas
      await this.showModal('record', 'Usuario registrado exitosamente');
      
      // Esperar 1.5 segundos y navegar a la página "yo"
      setTimeout(() => {
        this.router.navigate(['/yo']);
      }, 1500);
    } else {
      // Credenciales incorrectas
      await this.showModal('error', 'Error, usuario no registrado');
    }
  }

  async showModal(type: 'record' | 'error' | 'save', message: string) {
    const modal = await this.modalController.create({
      component: ClueModalComponent,
      componentProps: {
        type: type,
        message: message
      },
      cssClass: type === 'error' ? 'modal-top' : 'modal-center',
      backdropDismiss: false
    });

    await modal.present();
  }
}