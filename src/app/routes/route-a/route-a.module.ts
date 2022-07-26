import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteAComponent } from './route-a.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildModule } from '../../services/child.module';

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
    ChildModule
  ]
})
export class RouteAModule { }
