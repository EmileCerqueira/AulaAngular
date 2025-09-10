import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SextoComponente } from "./sexto-componente/sexto-componente";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SextoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oitavo-projeto');
}
