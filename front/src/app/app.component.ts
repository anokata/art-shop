import { Component } from '@angular/core';
import { ItemsService } from 'src/services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'art-shop';

  constructor(
    private itemsService: ItemsService
  ) { }

  test() {
    this.itemsService.getList().subscribe(items => {
      console.log(items);

    })

  }
}
