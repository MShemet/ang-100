import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../components/card/card.component';
import { BannerCutOutComponent } from '../../components/banner-cut-out/banner-cut-out.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, BannerCutOutComponent],
  exports: [CardComponent, BannerCutOutComponent],
})
export class BaseComponentsModule {}
