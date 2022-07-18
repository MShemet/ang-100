import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseComponentsModule } from '../modules/base-components/base-components.module';

import { PIPES_ROUTES } from './pipes.routes';

import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [PipesDocumentationComponent, TruncatePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES),
    BaseComponentsModule,
  ],
})
export class PipesModule {}
