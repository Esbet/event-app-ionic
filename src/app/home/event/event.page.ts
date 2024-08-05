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
import { events } from 'src/app/data/event';
import { Event } from 'src/app/interfaces/event.interface';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsServiceService } from 'src/app/services/films-service.service';


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

  constructor() {
    addIcons({ calendarOutline, locationOutline, heartOutline });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.getEvent(id);
    }
  }

  async getEvent(id: string) {
    const response = await this.filmService.getSeriesById(id);
    console.log(response);
    this.event = response;
  }
}