import { NgModule } from "@angular/core";
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailRoutingModule,
  ],
  declarations: [
    HeroDetailComponent,
  ],
  exports: [
    HeroDetailComponent,
  ],
})
export class HeroDetailModule {
  constructor() { }
}