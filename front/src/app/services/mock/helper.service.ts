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

}
