import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  IonInput
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

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
    phone: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
