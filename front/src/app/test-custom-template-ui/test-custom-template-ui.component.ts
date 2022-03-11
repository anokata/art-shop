import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-test-custom-template-ui',
  templateUrl: './test-custom-template-ui.component.html',
  styleUrls: ['./test-custom-template-ui.component.scss'],
})
export class TestCustomTemplateUiComponent implements OnInit {
  totalEstimate = 10;
  ctx = {
    estimate: this.totalEstimate,
    buttonText: 'TestCustomTemplateUiComponent',
  };

  @ViewChild('button') buttonTemplate!: TemplateRef<any>;
  @Input() customTemplate!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.buttonTemplate);
    console.log(this.customTemplate);
  }
}
