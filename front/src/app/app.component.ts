import { Component } from '@angular/core';
import { RoutesNames } from 'src/app/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public routesNames = RoutesNames;

  constructor(
  ) { }

}
