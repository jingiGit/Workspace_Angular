import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './component/heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ],
  declarations: [
    HeroesComponent,
  ],
  exports: [
    HeroesComponent,
  ],
})
export class HeroesModule {
  constructor() { }
}