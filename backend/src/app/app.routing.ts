import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './shared/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'access',
        loadChildren: './access/access.module#AccessModule'
    },
    {
        path: 'users',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'taxonomy',
        loadChildren: './taxonomy/taxonomy.module#TaxonomyModule'
    },
    {
        path: 'content',
        loadChildren: './node/node.module#NodeModule'
    }
];

export const appRoutingProviders: any[] = [
    AuthGuard
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);