import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonIcon, IonCard, IonListHeader, IonList, IonAvatar, IonText, IonFooter, IonButton, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, heartOutline, locationOutline } from 'ionicons/icons';
import { FilmsServiceService } from '../../../core/services/films-service.service';
import { FilmsController } from '../../../headless/films.controller';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonButton, IonFooter, IonText, IonAvatar, IonList, IonListHeader, IonCard, 
    IonIcon,
    IonCol,
    IonRow,
    IonLabel,
    IonItem,
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonContent,
    DatePipe
  ],
})
export class EventPage implements OnInit {
  event: any = {};

  private route = inject(ActivatedRoute);
  filmService = inject(FilmsServiceService)

  constructor(private filmController: FilmsController) {
    addIcons({ calendarOutline, locationOutline, heartOutline });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.event = await this.filmController.fetchFilmById(id!);
  }
}