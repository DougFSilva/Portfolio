
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobremimComponent } from './components/sobremim/sobremim.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MyiotComponent } from './components/projetos/myiot/myiot.component';
import { SamcsComponent } from './components/projetos/samcs/samcs.component';

const routes: Routes = [
  {
    path: '',
    component: ToolbarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'curriculo',
        component: CurriculoComponent
      },
      {
        path:'projetos',
        component: ProjetosComponent
      },
      {
        path:'projetos/myiot',
        component: MyiotComponent
      },
      {
        path:'projetos/samcs',
        component: SamcsComponent
      },
      {
        path: 'sobremim',
        component: SobremimComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
