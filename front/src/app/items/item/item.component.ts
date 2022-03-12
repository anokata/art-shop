import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Item } from '../model/item.model';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items$!: Observable<Item[]>;

  constructor(
    public itemsService: ItemsService,
  ) { }

  ngOnInit(): void {
    this.items$ = this.itemsService.loadItems().pipe(take(1));
  }

}
