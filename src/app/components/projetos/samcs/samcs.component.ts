import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samcs',
  templateUrl: './samcs.component.html',
  styleUrls: ['./samcs.component.css']
})
export class SamcsComponent implements OnInit {
  images: any[] = [
    {
      previewImageSrc: 'assets/img/samcs-example-1.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-1.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de login',
    },
    {
      previewImageSrc: 'assets/img/samcs-example-2.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-2.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela home',
    },
    {
      previewImageSrc: 'assets/img/samcs-example-3.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-3.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de turmas',
    },
    {
      previewImageSrc: 'assets/img/samcs-example-4.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-4.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de parametrização de dias de aula',
    },
    {
      previewImageSrc: 'assets/img/samcs-example-5.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-5.jpg',
      alt: 'Telas de alunos',
      title: 'Tela de',
    },
    {
      previewImageSrc: 'assets/img/samcs-example-6.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-6.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de detalhes de aluno',
    },
    {
      previewImageSrc: 'assets/img/samcs-example-7.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-7.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de gereção de relatório de ocorrências',
    },
    {
      previewImageSrc: 'assets/img/samcs-example-8.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-8.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de geração de crachá',
    },
    {
      previewImageSrc: 'assets/img/samcs-example-9.jpg',
      thumbnailImageSrc: 'assets/img/samcs-example-9.jpg',
      alt: 'Telas a aplicação',
      title: 'Crachá em pdf para impressão',
    },
  ];

  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
