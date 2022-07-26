import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteCComponent } from './route-c.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RouteCComponent,
  }
];

@NgModule({
  declarations: [
    RouteCComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RouteCModule { }
