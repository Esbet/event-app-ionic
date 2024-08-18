import { Injectable } from '@angular/core';
import { FilmsServiceService } from '../core/services/films-service.service';
import { Film } from '../core/interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsController {

  constructor(private filmsService: FilmsServiceService) {}

  // async fetchAllFilms(): Promise<Film[]> {
  //   try {
  //     const films = await this.filmsService.getAll();

  //     return films;
  //   } catch (error) {
  //     console.error('Error al obtener las series:', error);
  //     throw error; 
  //   }
  // }


  // async fetchFilmById(id: string): Promise<Film> {
  //   try {
  //     const film = await this.filmsService.getSeriesById(id);
  //     return film;
  //   } catch (error) {
  //     console.error(`Error al obtener la serie con ID ${id}:`, error);
  //     throw error;
  //   }
  // }

  // async getUpcomingEvents(): Promise<Film[]> {
  //   const films = await this.fetchAllFilms();
  //   return films.sort((a, b) => {
  //     const idA = parseInt(a.id, 10);
  //     const idB = parseInt(b.id, 10);
  //     return idB - idA;
  //   });
  // }

  async getUser(): Promise<any> {
    try {
      const user = await this.filmsService.getUser(); 
      console.log("useeer",user); // Llamada al método getUser del servicio
      return user;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw error;
    }
  }

  
}
