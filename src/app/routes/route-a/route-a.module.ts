import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteAComponent } from './route-a.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RouteAComponent,
  }
];

@NgModule({
  declarations: [
    RouteAComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RouteAModule { }
