import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteBComponent } from './route-b.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RouteBComponent,
  }
];

@NgModule({
  declarations: [
    RouteBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RouteBModule { }
