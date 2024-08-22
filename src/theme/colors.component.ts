// src/app/stories/color-palette/color-palette.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  template: `
    <div *ngFor="let color of colors" class="color-box">
      <div class="color-swatch" [ngStyle]="{'background-color': color.value}"></div>
      <div class="color-info">
        <strong>{{ color.name }}</strong>: {{ color.value }}
      </div>
    </div>
  `,
  styles: [
    `
      .color-box {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
      .color-swatch {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border: 1px solid #000;
      }
      .color-info {
        font-family: Arial, sans-serif;
      }
    `,
  ],
})
export class ColorPaletteComponent {
  @Input() colors: { name: string; value: string }[] = [];
}
