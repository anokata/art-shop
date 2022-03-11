import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TestCustomTemplateDirective } from './test-custom-template.directive';

@Component({
  selector: 'app-test-custom-template-ui',
  templateUrl: './test-custom-template-ui.component.html',
  styleUrls: ['./test-custom-template-ui.component.scss'],
})
export class TestCustomTemplateUiComponent implements OnInit {
  @ViewChild('button') buttonTemplate!: TemplateRef<any>;
  @Input() customTemplate!: TemplateRef<any>;
  @ContentChildren(TestCustomTemplateDirective)
  public testTemplate: QueryList<TestCustomTemplateDirective> | null = null;

  totalEstimate = 10;
  ctx = {
    estimate: this.totalEstimate,
    buttonText: 'TestCustomTemplateUiComponent',
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.buttonTemplate);
    console.log(this.customTemplate);
  }

  public getTestCustomTemplate(): TemplateRef<any> {
    if (!this.testTemplate) return this.buttonTemplate;
    return this.testTemplate.first.template;
  }
}
