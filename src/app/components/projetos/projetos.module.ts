import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button'
import {GalleriaModule} from 'primeng/galleria';

import { ProjetosComponent } from './projetos.component';
import { MyiotComponent } from './myiot/myiot.component';
import { SamcsComponent } from './samcs/samcs.component';


@NgModule({
  declarations: [ProjetosComponent, MyiotComponent, SamcsComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    GalleriaModule,
    RouterModule
  ],
  exports: [
    ProjetosComponent
  ]
})
export class ProjetosModule { }
