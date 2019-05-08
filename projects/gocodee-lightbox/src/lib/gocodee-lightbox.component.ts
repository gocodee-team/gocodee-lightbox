import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as lightgallery from 'lightgallery';

@Component({
  selector: 'gocodee-lightbox',
  templateUrl: './gocodee-lightbox.component.html',
  styleUrls: ['./gocodee-lightbox.component.scss']
})
export class GocodeeLightboxComponent implements OnInit {
  @ViewChild('lightbox') lightbox: ElementRef;
  @Input('images') images: any;
  constructor() {
  }
  ngOnInit() {
    console.log(this.images);
    
    lightgallery.lightGallery(this.lightbox.nativeElement);
  }

}
