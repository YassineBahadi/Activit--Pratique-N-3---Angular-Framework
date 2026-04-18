import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
})
export class AppComponent {
  title = 'l4N13BL14-app';
  email:string ="yassine@gmail.com";
}
