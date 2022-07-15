import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/components.module').then((p) => p.ComponentsModule),
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((p) => p.PipesModule),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./directives/directives.module').then((p) => p.DirectivesModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((p) => p.ServicesModule),
  },
];
