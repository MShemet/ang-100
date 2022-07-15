import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DIRECTIVES_ROUTES } from './directives.routes';

import { DirectivesDocumentationComponent } from './directives-documentation/directives-documentation.component';

@NgModule({
  declarations: [DirectivesDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(DIRECTIVES_ROUTES)],
})
export class DirectivesModule {}
