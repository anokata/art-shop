import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import * as _ from 'lodash';
import { HelperService } from './services/mock/helper.service';
import { RxHelperService } from './services/mock/rx-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'art-shop';
  message = '';

  constructor(
    private itemsService: ItemsService,
    private helperService: HelperService,
    private rxhelperService: RxHelperService,
  ) { }

  test() {
    this.itemsService.getList().subscribe(items => {
      console.log(items);

    });

    console.log(_.intersection(_.times(10 ,_.random), _.times(10 ,_.random)));
    // test forkJoin...
    this.message = this.helperService.generateRandomString();
    // this.rxhelperService.generateRandomNumber()
  }
}
