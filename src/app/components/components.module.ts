import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { COMPONENTS_ROUTES } from './components.routes';

import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { BaseComponentsModule } from '../modules/base-components/base-components.module';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
    BaseComponentsModule,
  ],
})
export class ComponentsModule {}
