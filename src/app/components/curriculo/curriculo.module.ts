import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import { CurriculoComponent } from './curriculo.component';


@NgModule({
  declarations: [CurriculoComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    CurriculoComponent
  ]
})
export class CurriculoModule { }
