import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {CardService} from '../card.service'

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})
export class MainGalleryComponent implements OnInit {

  constructor(private cardser:CardService) { }


  ngOnInit(): void {
  }


  sel_movie(data){
    this.cardser.sel_movie=data;
  }
}
