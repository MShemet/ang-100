import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SERVICES_ROUTES } from './services.routes';

import { ServicesDocumentationComponent } from './services-documentation/services-documentation.component';

@NgModule({
  declarations: [ServicesDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(SERVICES_ROUTES)],
})
export class ServicesModule {}
