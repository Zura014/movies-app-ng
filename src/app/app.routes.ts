import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: '**', component: NotFoundComponent,
    }
];
