import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating!: number;
  @Output() ratingChange = new EventEmitter<number>();

  getFullStarsArray() {
    return new Array(5);
  }

  setRating(value: number) {
    this.rating = value;
    this.ratingChange.emit(this.rating);
  }
}
