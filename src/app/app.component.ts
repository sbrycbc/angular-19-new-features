import { Component, ElementRef, input, signal, viewChild, output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
  <h1>Angular v19</h1>
  <input [(ngModel)]="name"/>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = signal<string>("");
  readonly value = input<string>("");
  readonly event = output<string>();
  readonly h1el = viewChild.required<ElementRef<HTMLHeadElement>>("h1el");

  constructor() {
    //this.value.set("Test"); // can not set....
  }
}