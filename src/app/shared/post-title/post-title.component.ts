import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostTitleComponent implements OnInit {
  posts$: Array<PostModel>;
  faComments = faComments;

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe((post) => {
      this.posts$ = post;
    });
  }

  ngOnInit(): void {}

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
