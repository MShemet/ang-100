import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
})
export class StarRatingsComponent {
  private highestRating = 5;

  @Input() public rating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    const hasHalfStar =
      this.rating - Math.floor(this.rating) !== 0 &&
      this.rating !== this.highestRating;

    return hasHalfStar;
  }

  public get emptyStars(): number[] {
    const totalEmptyStars = Math.floor(this.highestRating - this.rating);

    return Array(totalEmptyStars).fill(0);
  }
}
