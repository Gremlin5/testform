import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestForm } from './form/test-form/test-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'webts';
}
