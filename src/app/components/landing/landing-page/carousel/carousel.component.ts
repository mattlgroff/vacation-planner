import {
  Component,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  public carouselItems = [
    'https://i.imgur.com/Dcj1URW.jpg',
    'https://i.imgur.com/dgQkGL8.jpg',
    'https://i.imgur.com/Cpm0ivK.jpg',
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
