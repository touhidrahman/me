import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'emergency',
        loadComponent: () =>
            import('./pages/emergency-page/emergency-page.component').then((m) => m.EmergencyPageComponent),
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/not-found-page/not-found-page.component').then((m) => m.NotFoundPageComponent),
        title: '404',
    },
]
