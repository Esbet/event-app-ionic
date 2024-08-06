import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventPage } from './event.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FilmsServiceService } from 'src/app/services/films-service.service';
import { Film } from 'src/app/interfaces/film.interface';

describe('EventPage', () => {
  let component: EventPage;
  let fixture: ComponentFixture<EventPage>;

  beforeEach(async () => {

    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: (key: string) => '1' 
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        EventPage 
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: FilmsServiceService, useValue: { getSeriesById: () => of({}) } } 
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEvent on ngOnInit', async () => {
    const spy = spyOn(component, 'getEvent').and.callThrough();

    fixture.detectChanges(); 
    await fixture.whenStable(); 

    expect(spy).toHaveBeenCalled();
  });

  it('should set event data from service', async () => {
    const fixture = TestBed.createComponent(EventPage);
    const component = fixture.componentInstance;
    const mockEvent: Film = {
      _id: '1',
      id: '1',
      title: 'Test Event',
      image: 'test-image.jpg',
      date: '',
      channel: 'Test Channel',
      creator: 'Test Creator',
      rating: 5
    };
    spyOn(component.filmService, 'getSeriesById').and.returnValue(Promise.resolve(mockEvent));
    await component.getEvent('1');
    expect(component.event).toEqual(mockEvent);
  });

  it('should set the background image correctly', () => {
    const fixture = TestBed.createComponent(EventPage);
    const component = fixture.componentInstance;
    
    component.event = { title: '', image: 'test-image.jpg', date: new Date(), channel: '', creator: '', rating: '' };
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const bgDiv = compiled.querySelector('.bg') as HTMLElement;
    
    const computedStyle = window.getComputedStyle(bgDiv);
    const backgroundImage = computedStyle.backgroundImage;

    const urlMatch = backgroundImage.match(/url\(["']?(.*?)["']?\)/);
    expect(urlMatch).toBeTruthy();
    expect(urlMatch![1].endsWith('test-image.jpg')).toBeTrue();
  });

  it('should handle empty event data gracefully', async () => {
    const fixture = TestBed.createComponent(EventPage);
    const component = fixture.componentInstance;
    component.event = {}; 
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.bg')).toBeTruthy();
    expect(compiled.querySelector('.eventInfo')).toBeTruthy();
  });
  
  

});
