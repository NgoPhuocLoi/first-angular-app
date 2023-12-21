import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import Post from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  @ViewChild('f', { static: true }) postForm: NgForm;
  private postService = inject(PostService);

  posts = [];
  isFetching = false;

  ngOnInit(): void {
    this.onFetchPosts();
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
