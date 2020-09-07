import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  // {
  //   path: 'edit',
  //   loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  // },
  { path: 'edit/:user_id/:username/:phone/:email', 
    loadChildren: './edit/edit.module#EditPageModule' 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
