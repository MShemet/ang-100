import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent {
  public isShown = false;

  constructor(private vieportScroller: ViewportScroller) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const yCoordinate = this.vieportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  public goToTop(): void {
    this.vieportScroller.scrollToPosition([0, 0]);
  }
}
