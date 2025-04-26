import { Component } from '@angular/core';
import { DebugDemoComponent } from "../debug-demo/debug-demo.component";

@Component({
  selector: 'app-home',
  imports: [DebugDemoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
