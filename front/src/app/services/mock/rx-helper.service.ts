import { Injectable } from '@angular/core';
import { interval, Observable, of, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class RxHelperService {

  constructor(
    private helperService: HelperService,
  ) { }

  generateRandomString(length: number = 16): Observable<string> {
    return interval(300).pipe(
      takeUntil(timer(2000)),
      map((n: number) => this.helperService.generateRandomString(length)));
  }

  generateRandomNumber(): Observable<number> {
    return interval(200).pipe(
      takeUntil(timer(2000)),
      map((n: number) => this.helperService.generateRandomNumber()));
  }

}
