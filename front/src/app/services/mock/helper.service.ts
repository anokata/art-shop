import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import Faker from '@faker-js/faker';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  generateRandomString(length: number = 16): string {
    return Faker.random.words(length);
  }

  generateRandomNumber(): number {
    return Math.ceil(Math.random() * 10);
  }

  generateRandomArray(length: number = 4): string[] {
    return this.generateArray(length).map(e => Faker.database.collation());
  }

  generateArray(length: number): any[] {
    return Array.from(Array(length).keys());
  }


}
