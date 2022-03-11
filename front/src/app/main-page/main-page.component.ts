import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { HelperService } from '../services/mock/helper.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  title = 'art-shop';
  message = '';

  constructor(
    private itemsService: ItemsService,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {}

  test() {
    this.itemsService.getList().subscribe((items) => {
      console.log(items);
    });

    this.message = this.helperService.generateRandomString();
  }
}
