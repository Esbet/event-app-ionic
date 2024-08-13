import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { FilmsServiceService } from './films-service.service';
import { Film } from '../interfaces/film.interface';

describe('FilmsServiceService', () => {
  let service: FilmsServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [FilmsServiceService]
    });
    service = TestBed.inject(FilmsServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**Verifies that the component service can make an HTTP request to obtain all the films and that it handles the response correctly. */
  it('should fetch all films', () => {
    const mockFilms: Film[] = [
      { id: '1', title: 'Event 1', image: 'image1.jpg', date: '', channel: 'Channel 1', _id: '1', creator: 'Creator 1', rating: 5 },
      { id: '2', title: 'Event 2', image: 'image2.jpg', date: '', channel: 'Channel 2', _id: '2', creator: 'Creator 2', rating: 4 }
    ];

    service.getAll().then(films => {
      expect(films.length).toBe(2);
      expect(films).toEqual(mockFilms);
    });

    const req = httpMock.expectOne('https://peticiones.online/api/series');
    expect(req.request.method).toBe('GET');
    req.flush(mockFilms);
  });

  /**verifies that the component service can successfully obtain a single movie using a specific ID. */
  it('should fetch a single film by ID', () => {
    const mockFilm: Film = { id: '1', title: 'Event 1', image: 'image1.jpg', date: '', channel: 'Channel 1', _id: '1', creator: 'Creator 1', rating: 5 };

    service.getSeriesById('1').then(film => {
      expect(film).toEqual(mockFilm);
    });

    const req = httpMock.expectOne('https://peticiones.online/api/series/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockFilm);
  });
});
