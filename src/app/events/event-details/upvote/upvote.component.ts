import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss'],
})
export class UpvoteComponent implements OnInit {
  @Input() count!: number;
  @Input() voted!: boolean;
  @Output() vote = new EventEmitter();
  faHeart = faHeart;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.vote.emit({});
  }
}
