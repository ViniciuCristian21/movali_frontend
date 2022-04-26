import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesFormPageRoutingModule } from './movies-form-routing.module';

import { MoviesFormPage } from './movies-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesFormPageRoutingModule
  ],
  declarations: [MoviesFormPage]
})
export class MoviesFormPageModule {}
