import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/Curso';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {
  public cursos : Curso[]= [];
  public tecnologias = new Set<string>();
  panelOpenState = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarCursos();
  }

  public buscarCursos(): void {
    this.http.get<Curso[]>('assets/data/cursos.json').subscribe({
      next: (response) => {
        this.cursos = response;
        this.tecnologias = this.filtrarTecnologias(response);
      },
      error: (ex) => {
        console.log(ex.error);
      }
    })
  }

  public filtrarCursosPorTecnologia(tecnologia: string):Curso[] {
    return this.cursos.filter(curso => {return curso.tecnologia == tecnologia});
  }

  public filtrarTecnologias(cursos: Curso[]): Set<string> {
    let tecnologias = new Set<string>();
    cursos.forEach(curso => {tecnologias.add(curso.tecnologia)});
    return tecnologias;
  }

  public filtrarCHPorTecnologia(tecnologia: string): number {
    let cargaHorariaTotal: number = 0;
    this.cursos.forEach(curso => {
      if(curso.tecnologia == tecnologia) {
        cargaHorariaTotal += curso.cargaHoraria
      }
    })
    return cargaHorariaTotal;
  }

}
