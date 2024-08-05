import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonFabButton,
  IonBadge,
  IonRow,
  IonCol,
  IonSearchbar,
  IonicSlides,
  IonListHeader,
  IonList,
  IonCard,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  locateOutline,
  locationOutline,
  notificationsOutline,
  optionsOutline,
} from 'ionicons/icons';
import { Category } from '../interfaces/category.interface';
import { categories } from '../data/categories';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Film } from '../interfaces/film.interface';
import {FilmsServiceService} from '../services/films-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonList,
    IonListHeader,
    IonSearchbar,
    IonCol,
    IonRow,
    IonBadge,
    IonFabButton,
    IonText,
    IonIcon,
    IonLabel,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink,
    DatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  upcomingEvents: Film[] = [];
  currentFilms: Film[] = [];
  categories: Category[] = [];

  filmService = inject(FilmsServiceService)

  constructor() {
    addIcons({
      locateOutline,
      notificationsOutline,
      optionsOutline,
      locationOutline,
      arrowForwardOutline
    });
  }

  async ngOnInit() {
    const response = await this.filmService.getAll();
    this.currentFilms = response; 
  

    this.upcomingEvents = [...response].sort((a, b) => {
    
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return idB - idA; 
    });
  
    this.categories = [...categories];
  }
  
}