import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/subreddit/subreddit.service';
import { SubredditModel } from 'src/app/subreddit/subreddit-response';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css'],
})
export class SubredditSideBarComponent implements OnInit {
  subreddits: Array<SubredditModel>;
  constructor(private subredditService: SubredditService) {
    this.subredditService.getAllSubreddits().subscribe((data) => {
      this.subreddits = data;
    });
  }

  ngOnInit(): void {}

  displayViewAll() {}
}
