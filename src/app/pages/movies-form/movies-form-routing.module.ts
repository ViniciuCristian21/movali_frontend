import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesFormPage } from './movies-form.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesFormPageRoutingModule {}
