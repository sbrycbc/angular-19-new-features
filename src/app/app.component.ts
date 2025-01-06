import { Component, ElementRef, input, signal, viewChild, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [FormsModule, HomeComponent],
  template: `
  <h1 #h1el>Angular v19</h1>
  <input [(ngModel)]="userId"/>
  <app-home [userId]="userId()"></app-home>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = signal<string>("");
  userId = signal<number>(2);
  readonly value = input<string>("");
  readonly event = output<string>();
  readonly h1el = viewChild.required<ElementRef<HTMLHeadElement>>("h1el");

  constructor() {
    //this.value.set("Test"); // can not set....
  }
}