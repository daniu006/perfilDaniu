import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  ModalController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  closeCircleOutline, 
  checkmarkCircleOutline,
  alertCircleOutline,
  closeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-clue-modal',
  templateUrl: './clue-modal.component.html',
  styleUrls: ['./clue-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonIcon
  ]
})
export class ClueModalComponent implements OnInit {

  @Input() type: 'record' | 'error' | 'save' = 'save';
  @Input() message: string = '';

  constructor(private modalController: ModalController) { 
    addIcons({
      'close-circle-outline': closeCircleOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'alert-circle-outline': alertCircleOutline,
      'close-outline': closeOutline
    });
  }

  ngOnInit() {}

  getTitle(): string {
    switch (this.type) {
      case 'record':
        return 'Registro Exitoso';
      case 'error':
        return 'Error';
      case 'save':
        return 'Guardado Exitoso';
      default:
        return 'Notificación';
    }
  }

  getIcon(): string {
    switch (this.type) {
      case 'record':
        return 'checkmark-circle-outline';
      case 'error':
        return 'close-circle-outline';
      case 'save':
        return 'checkmark-circle-outline';
      default:
        return 'alert-circle-outline';
    }
  }

  getToolbarColor(): string {
    switch (this.type) {
      case 'record':
        return 'success';
      case 'error':
        return 'danger';
      case 'save':
        return 'primary';
      default:
        return 'dark';
    }
  }

  getButtonColor(): string {
    switch (this.type) {
      case 'record':
        return 'success';
      case 'error':
        return 'danger';
      case 'save':
        return 'primary';
      default:
        return 'dark';
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }
}