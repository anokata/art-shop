import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { testItem } from '../mock/item.mock';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  loadItems(): Observable<Item[]> {
    return of([testItem, testItem]);
  }
}
