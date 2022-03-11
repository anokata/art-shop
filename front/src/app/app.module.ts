import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestFrokJoinComponent } from './test-frok-join/test-frok-join.component';
import { TabsContainerComponent } from './test-routes/tabs-container/tabs-container.component';
import { TabListComponent } from './test-routes/tab-list/tab-list.component';
import { TabButtonsComponent } from './test-routes/tab-buttons/tab-buttons.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TestCustomTemplateUiComponent } from './test-custom-template-ui/test-custom-template-ui.component';
import { TestCustomTemplateDirective } from './test-custom-template-ui/test-custom-template.directive';


@NgModule({
  declarations: [AppComponent, TestFrokJoinComponent, TabsContainerComponent, TabListComponent, TabButtonsComponent, MainPageComponent, TestCustomTemplateUiComponent, TestCustomTemplateDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    ButtonModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
