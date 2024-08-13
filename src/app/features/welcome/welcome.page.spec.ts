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


/**verifies that the component's onboardingScreens property is correctly initialized with the expected images. */
  it('should initialize onboardingScreens with correct images', () => {
    expect(component.onboardingScreens).toEqual([
      { image: '1.jpg' },
      { image: '2.jpg' },
      { image: '3.jpg' },
    ]);
  });

  /**Verifies that the component's swiperModules property is correctly initialized with the IonicSlides module. */
  it('should initialize swiperModules with IonicSlides', () => {
    expect(component.swiperModules).toEqual([IonicSlides]);
  });

  /**Verifies that the swiper-container and swiper-slide elements render correctly in the component view.*/
  it('should render the swiper-container and swiper-slide elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const swiperContainer = compiled.querySelector('swiper-container');
    const swiperSlides = compiled.querySelectorAll('swiper-slide');
    
    expect(swiperContainer).toBeTruthy();
    expect(swiperSlides.length).toBe(component.onboardingScreens.length);
  });

  /**Verify that the "Get Started" button renders correctly in the component's DOM and that its text is as expected. */
  it('should render the Get Started button with correct text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('ion-button');
    
    expect(button).toBeTruthy();
    expect(button?.textContent?.trim()).toBe('Get Started');
  });  

});

