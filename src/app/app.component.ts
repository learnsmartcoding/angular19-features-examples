import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginDemoComponent } from "./copilot/login-demo/login-demo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavBarComponent,  LoginDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19 Features';
}
