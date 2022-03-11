import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTestCustomTemplate]'
})
export class TestCustomTemplateDirective {
  @Input('custom-template') public some: string = 'a';
  constructor(public template: TemplateRef<any>) { }
}
