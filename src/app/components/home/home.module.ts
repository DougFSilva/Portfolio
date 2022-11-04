import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [ HomeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
