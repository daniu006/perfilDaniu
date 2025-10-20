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
  IonButtons
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  schoolOutline, 
  calendarOutline, 
  bookOutline, 
  logoGithub, 
  chevronForwardOutline,
  arrowBackOutline
} from 'ionicons/icons';

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
  constructor() {
    // Registrar los iconos que se usarán
    addIcons({
      'school-outline': schoolOutline,
      'calendar-outline': calendarOutline,
      'book-outline': bookOutline,
      'logo-github': logoGithub,
      'chevron-forward-outline': chevronForwardOutline,
      'arrow-back-outline': arrowBackOutline
    });
  }

  ngOnInit() {
  }

  // Método para abrir el perfil de GitHub
  openGithub() {
    window.open('https://github.com/daniu006', '_blank');
  }

}
