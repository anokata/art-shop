import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TabButtonsComponent } from './test-routes/tab-buttons/tab-buttons.component';
import { TabListComponent } from './test-routes/tab-list/tab-list.component';
import { TabsContainerComponent } from './test-routes/tabs-container/tabs-container.component';

export const RoutesNames = {
  tabsList: 'list',
  tabsButtons: 'buttons',
  main: 'main',
  tabs: 'tabs',
}

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesNames.main,
    pathMatch: 'full'
  },
  {
    path: RoutesNames.main,
    component: MainPageComponent,
  },
  {
    path: RoutesNames.tabs,
    component: TabsContainerComponent,
    children: [
      {
        path: RoutesNames.tabsButtons,
        component: TabButtonsComponent
      },
      {
        path: RoutesNames.tabsList,
        component: TabListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
