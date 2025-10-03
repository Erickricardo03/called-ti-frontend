import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
