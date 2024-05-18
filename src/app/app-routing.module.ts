import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '',
    redirectTo: 'dosen/Dosen',
    pathMatch: 'full'
  },
  {
    path: 'dosen/:id',
    loadChildren: () => import('./dosen/dosen.module').then( m => m.DosenPageModule)
  },

  {
    path: '',
    redirectTo: 'matakuliah/Matakuliah',
    pathMatch: 'full'
  },
  {
    path: 'matakuliah/:id',
    loadChildren: () => import('./matakuliah/matakuliah.module').then( m => m.MatakuliahPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
