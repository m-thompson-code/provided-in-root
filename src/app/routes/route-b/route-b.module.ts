import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteBComponent } from './route-b.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildModule } from 'src/app/services/child.module';

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
    ChildModule
  ]
})
export class RouteBModule { }
