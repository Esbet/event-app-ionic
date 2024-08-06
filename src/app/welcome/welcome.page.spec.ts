import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterTestingModule } from '@angular/router/testing'; 
import { WelcomePage } from './welcome.page'; 
import {IonicSlides,} from '@ionic/angular/standalone';


describe('WelcomePage', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, 
        RouterTestingModule, 
        WelcomePage 
      ],
    }).compileComponents(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** Component Initialization Test */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize onboardingScreens with correct images', () => {
    expect(component.onboardingScreens).toEqual([
      { image: '1.jpg' },
      { image: '2.jpg' },
      { image: '3.jpg' },
    ]);
  });

  it('should initialize swiperModules with IonicSlides', () => {
    expect(component.swiperModules).toEqual([IonicSlides]);
  });

  /**Test template rendering */
  it('should render the swiper-container and swiper-slide elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const swiperContainer = compiled.querySelector('swiper-container');
    const swiperSlides = compiled.querySelectorAll('swiper-slide');
    
    expect(swiperContainer).toBeTruthy();
    expect(swiperSlides.length).toBe(component.onboardingScreens.length);
  });

  it('should render the Get Started button with correct text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('ion-button');
    
    expect(button).toBeTruthy();
    expect(button?.textContent?.trim()).toBe('Get Started');
  });  

});

