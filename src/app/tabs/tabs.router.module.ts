import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {AuthGuard} from '../services/user/auth.guard';

const routes: Routes = [
   {
      path: 'tabs', component: TabsPage, children: [
         {
            path: 'home',
            loadChildren: './home/home.module#HomePageModule'
         },
         {
            path: 'event-list', loadChildren:
                './pages/event-list/event-list.module#EventListPageModule'
         },
         {
            path: 'event-list-transport', loadChildren:
                './pages/event-list-transport/event-list-transport.module#EventListTransportPageModule'
         },
         {
            path: 'event-create', loadChildren:
                './pages/event-create/event-create.module#EventCreatePageModule', canActivate: [AuthGuard]
         },
         {
            path: 'event-create-transport', loadChildren:
                './pages/event-create-transport/event-create-transport.module#EventCreateTransportPageModule'
         },
         {
            path: 'event-detail', loadChildren:
                './pages/event-detail/event-detail.module#EventDetailPageModule'
         },
         { path: 'event-detail/:id', loadChildren:
                './pages/event-detail/event-detail.module#EventDetailPageModule', canActivate: [AuthGuard]
         },
         {
            path: 'event-detail-transport', loadChildren:
                './pages/event-detail-transport/event-detail-transport.module#EventDetailTransportPageModule'
         },
         { path: 'event-detail-transport/:id', loadChildren:
                './pages/event-detail-transport/event-detail-transport.module#EventDetailTransportPageModule', canActivate: [AuthGuard]
         },
         {
            path: 'profile', loadChildren:
                './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard]
         },
         {
            path: 'signup', loadChildren:
                './pages/signup/signup.module#SignupPageModule'
         },
         {
            path: 'reset-password', loadChildren:
                './pages/reset-password/reset-password.module#ResetPasswordPageModule'
         },
         {
            path: 'login', loadChildren:
                './pages/login/login.module#LoginPageModule'
         },
         {
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full'
         }
      ]
   },
   {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TabsPageRoutingModule {
}


// const routes: Routes = [
//   {
//     path: 'tabs', component: TabsPage, children: [
//       {
//         path: 'home',
//         children: [
//           {path: '', loadChildren: () =>
//                 import('../home/home.module')
//                     .then(m => m.HomePageModule)}
//         ]
//       },
//       {
//         path: 'event-list',
//         children: [
//           {
//             path: '',
//             loadChildren: () =>
//                 import('../pages/event-list/event-list.module')
//                     .then(m => m.EventListPageModule)
//           }
//         ]
//       },
//       {
//         path: 'event-list-transport',
//         children: [
//           {
//             path: '',
//             loadChildren: () =>
//                 import('../pages/event-list-transport/event-list-transport.module')
//                     .then(m => m.EventListTransportPageModule)
//           }
//         ]
//       },
//
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   }
// ];
