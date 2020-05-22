import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {
    path: 'country-list',
    loadChildren: () => import('./country-list/country-list.module').then( m => m.CountryListPageModule)
  },
  {
    path: 'country-detail/:id',
    loadChildren: () => import('./country-detail/country-detail.module').then( m => m.CountryDetailPageModule)
  },
 
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){}

}

