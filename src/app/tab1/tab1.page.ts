import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SliderService } from '../providers/slider.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items = [];
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private router: Router, private sliderService: SliderService) { }

  ngOnInit() {
    this.items = this.sliderService.getItems();
  }
}
