import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imageUrl: string;

  constructor() { 

  }
  src: string;
  defaultSrc: string;

  ngOnInit() {
    this.src = this.imageUrl;
    this.defaultSrc = 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?fm=jpg';
  }

}
