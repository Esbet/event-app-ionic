import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Film } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsServiceService {

  httpClient = inject(HttpClient);

  getAll(): Promise<Film[]>{
    return firstValueFrom(
     this.httpClient.get<Film[]>('https://peticiones.online/api/series')
    )
  }

  getSeriesById(id: string): Promise<Film> {
    return firstValueFrom(
      this.httpClient.get<Film>(`https://peticiones.online/api/series/${id}`)
    );
  }
}
