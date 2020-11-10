import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes.module').then(m => m.HeroesModule)
  },
  { 
    path: 'detail/:id',
    loadChildren: () => import('./hero-detail.module').then(m => m.HeroDetailModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
