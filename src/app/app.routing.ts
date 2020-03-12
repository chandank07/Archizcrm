import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';

// import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
// import { ErrorComponent } from './pages/errors/error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'Lead', loadChildren: () => import('./pages/enquiry/enquiry.module').then(m => m.EnquiryModule), data: { breadcrumb: 'Enquiry' }},
            { path: 'Location', loadChildren: () => import('./pages/locations/locations.module').then(m => m.LocationsModule), data: { breadcrumb: 'Location' }},
            { path: 'Company', loadChildren: () => import('./pages/companys/companys.module').then(m => m.CompanysModule), data: { breadcrumb: 'Company' }},
            { path: 'Compaign', loadChildren: () => import('./pages/compaign/compaign.module').then(m => m.CompaignModule), data: { breadcrumb: 'Compaign' } },
            { path: 'Setting', loadChildren: () => import('./pages/seting/seting.module').then(m => m.SetingModule), data: { breadcrumb: 'Setting' }},
            { path: 'api-confrigation', loadChildren: () => import('./pages/api-configer/api-configer.module').then(m => m.ApiConfigerModule), data: { breadcrumb: 'Api Configuration' }},
            // { path: 'tables', loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            // { path: 'icons', loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
            // { path: 'drag-drop', loadChildren: () => import('./pages/drag-drop/drag-drop.module').then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } },
            // { path: 'schedule', loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule), data: { breadcrumb: 'Schedule' } },
            // { path: 'mailbox', loadChildren: () => import('./pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            // { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: 'Chat' } },
            // { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            // { path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: () => import('./pages/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' }  },          
            { path: 'profile', loadChildren: () => import ('./pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } }, 
            // { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } }
        ]
    },
    // { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
    // { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    // { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,  // <- uncomment this line for disable lazy load
    // useHash: true
});