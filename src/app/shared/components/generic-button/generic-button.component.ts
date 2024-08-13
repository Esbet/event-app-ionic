// src/app/shared/components/generic-button/generic-button.component.ts

import { Component, Input } from '@angular/core';
import { IonButton, IonText } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
  standalone: true,
  imports: [IonButton, IonText, RouterModule], // Agregar RouterModule aquí
})
export class GenericButtonComponent {
  @Input() expand: 'full' | 'block' | 'default' = 'default';
  @Input() shape: 'round' | 'default' = 'default';
  @Input() color: string = 'primary';
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() strong: boolean = false;
  @Input() routerLink: string = ''; // Asegúrate de tener el routerLink como @Input
}
