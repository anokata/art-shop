import { Component, OnInit } from '@angular/core';
import { RoutesNames } from 'src/app/app-routing.module';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements OnInit {

  public routesNames = RoutesNames;

  constructor() { }

  ngOnInit(): void {
  }

}
