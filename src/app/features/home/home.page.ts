import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonIcon, IonText, IonFabButton, IonBadge, IonRow, IonCol, IonSearchbar, IonicSlides, IonListHeader, IonList, IonCard } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline, locateOutline, locationOutline, notificationsOutline, optionsOutline } from 'ionicons/icons';
import { Category } from '../../core/interfaces/category.interface';
import { categories } from '../../core/data/categories';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Film } from '../../core/interfaces/film.interface';
import { FilmsController } from '../../headless/films.controller';

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

  constructor(private filmController: FilmsController) {
    addIcons({
      locateOutline,
      notificationsOutline,
      optionsOutline,
      locationOutline,
      arrowForwardOutline
    });
  }

  async ngOnInit() {
    this.upcomingEvents = await this.filmController.getUpcomingEvents();
    this.currentFilms = await this.filmController.fetchAllFilms();
    this.categories = [...categories];
    await this.filmController.getUser();
  }
}
