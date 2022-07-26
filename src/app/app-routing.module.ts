import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
