import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonCard, 
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonAvatar,
  IonImg,
  IonBackButton,
  IonButtons,
  ModalController
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  schoolOutline, 
  calendarOutline, 
  bookOutline, 
  logoGithub, 
  chevronForwardOutline,
  arrowBackOutline,
  sendOutline,
  saveOutline
} from 'ionicons/icons';
import { ClueModalComponent } from '../clue-modal/clue-modal.component';

@Component({
  selector: 'app-yo',
  templateUrl: './yo.page.html',
  styleUrls: ['./yo.page.scss'],
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
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonIcon,
    IonAvatar,
    IonImg,
    IonBackButton,
    IonButtons
  ],
})
export class YoPage implements OnInit {
  
  constructor(private modalController: ModalController) {
    addIcons({
      'school-outline': schoolOutline,
      'calendar-outline': calendarOutline,
      'book-outline': bookOutline,
      'logo-github': logoGithub,
      'chevron-forward-outline': chevronForwardOutline,
      'arrow-back-outline': arrowBackOutline,
      'send-outline': sendOutline,
      'save-outline': saveOutline
    });
  }

  ngOnInit() {
  }

  openGithub() {
    window.open('https://github.com/daniu006', '_blank');
  }

  async guardarDatos() {
    await this.showModal('save', 'Todos los datos han sido guardados correctamente');
  }

  async showModal(type: 'record' | 'error' | 'save', message: string) {
    const modal = await this.modalController.create({
      component: ClueModalComponent,
      componentProps: {
        type: type,
        message: message
      },
      cssClass: 'custom-modal',
      backdropDismiss: false
    });

    await modal.present();
  }
}