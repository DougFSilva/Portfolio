import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('links') links: ElementRef<HTMLInputElement>;
  @ViewChild('toolbar') toolbar: ElementRef<HTMLInputElement>;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  public selecionarLink(name: string) {
    for (let index = 0; index < this.links.nativeElement.children.length; index++) {
      this.links.nativeElement.children.item(index)?.setAttribute('style', 'opacity:60%')
    }
    this.links.nativeElement.children.namedItem(name)?.setAttribute('style', 'opacity: 100%')
  }

}
