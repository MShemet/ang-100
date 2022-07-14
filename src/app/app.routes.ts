import { Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';
import { PipesDocumentationComponent } from './pipes/pipes-documentation/pipes-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ComponentDocumentationComponent },
  { path: 'pipes', component: PipesDocumentationComponent },
  { path: 'directives', component: DirectivesDocumentationComponent },
  { path: 'services', component: ServicesDocumentationComponent },
];
