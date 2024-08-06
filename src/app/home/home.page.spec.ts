import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { FilmsServiceService } from '../services/films-service.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Film } from '../interfaces/film.interface';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let filmServiceSpy: jasmine.SpyObj<FilmsServiceService>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    const mockFilms: Film[] = [
      { id: '1', title: 'Event 1', image: 'image1.jpg', date: '', channel: 'Channel 1', _id: '1', creator: 'Creator 1', rating: 5 },
      { id: '2', title: 'Event 2', image: 'image2.jpg', date: '', channel: 'Channel 2', _id: '2', creator: 'Creator 2', rating: 4 }
    ];

    filmServiceSpy = jasmine.createSpyObj('FilmsServiceService', ['getAll']);
    filmServiceSpy.getAll.and.returnValue(Promise.resolve(mockFilms));

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        HomePage 
      ],
      providers: [
        { provide: FilmsServiceService, useValue: filmServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load upcoming events on init', fakeAsync(() => {
    fixture.detectChanges();
    tick(); 
    fixture.detectChanges();
    expect(component.upcomingEvents.length).toBe(2); 
  }));

  it('should order upcoming events by id desc', fakeAsync(() => {
    fixture.detectChanges();
    tick(); 
    fixture.detectChanges();
    const sortedEvents = [...component.upcomingEvents].sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10));
    expect(component.upcomingEvents).toEqual(sortedEvents);
  }));

});
