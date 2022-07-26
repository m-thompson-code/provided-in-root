import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./routes/route-a/route-a.module').then(m => m.RouteAModule),
  },
  {
    path: 'b',
    loadChildren: () => import('./routes/route-b/route-b.module').then(m => m.RouteBModule),
  },
  {
    path: 'c',
    loadChildren: () => import('./routes/route-c/route-c.module').then(m => m.RouteCModule),
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
