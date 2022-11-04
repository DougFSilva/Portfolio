import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myiot',
  templateUrl: './myiot.component.html',
  styleUrls: ['./myiot.component.css']
})
export class MyiotComponent implements OnInit {
  images: any[] = [
    {
      previewImageSrc: 'assets/img/myiot-example-1.jpg',
      thumbnailImageSrc: 'assets/img/myiot-example-1.jpg',
      alt: 'Telas da aplicação',
      title: 'Tela de login',
    },
    {
      previewImageSrc: 'assets/img/myiot-example-2.jpg',
      thumbnailImageSrc: 'assets/img/myiot-example-2.jpg',
      alt: 'Telas da aplicação',
      title: 'Tela home',
    },
    {
      previewImageSrc: 'assets/img/myiot-example-3.jpg',
      thumbnailImageSrc: 'assets/img/myiot-example-3.jpg',
      alt: 'Telas da aplicação',
      title: 'Tela de dispositivos de medição',
    },
    {
      previewImageSrc: 'assets/img/myiot-example-4.jpg',
      thumbnailImageSrc: 'assets/img/myiot-example-4.jpg',
      alt: 'Telas da aplicação',
      title: 'Tela de dispositivos analógicos',
    },
    {
      previewImageSrc: 'assets/img/myiot-example-5.jpg',
      thumbnailImageSrc: 'assets/img/myiot-example-5.jpg',
      alt: 'Telas da aplicação',
      title: 'Tela de dispositivos discretos',
    },
    {
      previewImageSrc: 'assets/img/myiot-example-6.jpg',
      thumbnailImageSrc: 'assets/img/myiot-example-6.jpg',
      alt: 'Telas da aplicação',
      title: 'Tela de cadastro de dispositivos de medição',
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
