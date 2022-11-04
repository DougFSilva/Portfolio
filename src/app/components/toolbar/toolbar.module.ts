import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import { ToolbarComponent } from './toolbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
