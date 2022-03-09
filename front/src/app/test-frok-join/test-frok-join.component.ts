import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RxHelperService } from '../services/mock/rx-helper.service';

@Component({
  selector: 'app-test-frok-join',
  templateUrl: './test-frok-join.component.html',
  styleUrls: ['./test-frok-join.component.scss']
})
export class TestFrokJoinComponent implements OnInit {

  constructor(
    private rxhelperService: RxHelperService,
  ) { }

  ngOnInit(): void {
  }

  test() {
    forkJoin({
      one: this.rxhelperService.generateRandomNumber(),
      two: this.rxhelperService.generateRandomString(),
    }).subscribe(console.log);
  }

}
