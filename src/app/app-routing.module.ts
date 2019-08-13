import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'tabs/login', pathMatch: 'full' },

  // { path: 'tabs', loadChildren:
  //       './tabs/tabs.module#TabsPageModule' },

  {
  path: '',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
},

  { path: 'home', loadChildren:
        './home/home.module#HomePageModule', canActivate: [AuthGuard] },

  { path: 'event-create', loadChildren:
        './pages/event-create/event-create.module#EventCreatePageModule', canActivate: [AuthGuard] },

  { path: 'event-detail', loadChildren:
        './pages/event-detail/event-detail.module#EventDetailPageModule' },

  { path: 'event-detail/:id', loadChildren:
        './pages/event-detail/event-detail.module#EventDetailPageModule', canActivate: [AuthGuard] },

  { path: 'event-list', loadChildren:
        './pages/event-list/event-list.module#EventListPageModule', canActivate: [AuthGuard] },

  { path: 'login', loadChildren:
        './pages/login/login.module#LoginPageModule' },

  { path: 'profile', loadChildren:
        './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },

  { path: 'reset-password', loadChildren:
        './pages/reset-password/reset-password.module#ResetPasswordPageModule' },

  { path: 'signup', loadChildren:
        './pages/signup/signup.module#SignupPageModule' },

  { path: 'event-create-transport', loadChildren:
        './pages/event-create-transport/event-create-transport.module#EventCreateTransportPageModule' },

  { path: 'event-list-transport', loadChildren:
        './pages/event-list-transport/event-list-transport.module#EventListTransportPageModule' },

  { path: 'event-detail-transport', loadChildren:
        './pages/event-detail-transport/event-detail-transport.module#EventDetailTransportPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


// {
//   path: '',
//   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
// },
