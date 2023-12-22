import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import Post from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) postForm: NgForm;
  private postService = inject(PostService);
  private errorSub: Subscription;
  errorMessage: string;

  posts = [];
  isFetching = false;

  ngOnInit(): void {
    this.onFetchPosts();
    this.errorSub = this.postService.errorMessage.subscribe((errMsg) => {
      this.errorMessage = errMsg;
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onSubmit() {
    this.postService.addPost(
      new Post(this.postForm.value.title, this.postForm.value.content)
    );
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.getAll().subscribe((res) => {
      this.posts = res;
      this.isFetching = false;
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.posts = [];
    });
  }
}
