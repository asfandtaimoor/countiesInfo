import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryListPageRoutingModule } from './country-list-routing.module';

import { CountryListPage } from './country-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryListPageRoutingModule
  ],
  declarations: [CountryListPage]
})
export class CountryListPageModule {}
