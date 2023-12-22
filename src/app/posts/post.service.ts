import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Post from './post.model';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  errorMessage = new Subject<string>();

  private POSTS_URL =
    'https://learn-angular-d8a81-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';

  addPost(post: Post) {
    this.http.post(this.POSTS_URL, post).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.errorMessage.next(err.message);
      }
    );
  }

  getAll() {
    return this.http
      .get(this.POSTS_URL, {
        headers: {
          'Customer-header': 'Hello',
        },
        params: {
          print: 'pretty',
          something: true,
        },
      })
      .pipe(
        map((res) => {
          const posts = [];
          for (let key in res) {
            if (res.hasOwnProperty(key)) {
              posts.push({ ...res[key], id: key });
            }
          }
          return posts;
        })
      );
  }

  deletePosts() {
    return this.http.delete(this.POSTS_URL);
  }
}
