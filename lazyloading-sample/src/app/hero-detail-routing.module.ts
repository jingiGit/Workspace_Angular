import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component'

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HeroDetailRoutingModule { }