import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import * as _ from 'lodash';
import { HelperService } from './services/mock/helper.service';
import { RxHelperService } from './services/mock/rx-helper.service';
import { forkJoin } from 'rxjs';

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
  ) { }

  test() {
    this.itemsService.getList().subscribe(items => {
      console.log(items);
    });

    this.message = this.helperService.generateRandomString();
  }
}
