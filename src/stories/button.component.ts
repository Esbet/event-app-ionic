import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FilmsController } from '../app/headless/films.controller';


@Component({
  selector: 'storybook-button',
  standalone: true,
  imports:[CommonModule],
  template: `<button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>
  <div *ngIf="userData">
    <h3>User Data:</h3>
    <p>ID: {{ userData.id }}</p>
    <p>First Name: {{ userData.firstName }}</p>
    <p>Last Name: {{ userData.lastName }}</p>
  </div>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent implements OnInit {
  @Input() primary = false;
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Button';
  @Output() onClick = new EventEmitter<Event>();

  userData: any;

  constructor(private filmController: FilmsController) {}

  async ngOnInit() {
    try {
      this.userData = await this.filmController.getUser();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
