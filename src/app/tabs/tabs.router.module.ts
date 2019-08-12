import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
   {
      path: 'tabs', component: TabsPage, children: [
         {
            path: 'home',
            children: [
               {path: '', loadChildren: () =>
                     import('../home/home.module')
                         .then(m => m.HomePageModule)}
            ]
         },
         {
            path: 'event-list',
            children: [
               {
                  path: '',
                  loadChildren: () =>
                      import('../pages/event-list/event-list.module')
                          .then(m => m.EventListPageModule)
               }
            ]
         },
         {
            path: 'event-list-transport',
            children: [
               {
                  path: '',
                  loadChildren: () =>
                      import('../pages/event-list-transport/event-list-transport.module')
                          .then(m => m.EventListTransportPageModule)
               }
            ]
         },

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
