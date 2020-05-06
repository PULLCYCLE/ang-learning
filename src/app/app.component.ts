import {Component, OnInit} from '@angular/core';
import {timeout} from 'rxjs/operators';

export interface Post {
  title: string
  text: string
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Want to learn angular', text: 'Im still learning', id: 1},
    {title: "Hello, it's me", text: 'Oops, i did it again', id: 2},
  ]

  ngOnInit(): void {
    setTimeout( () => {
      console.log('Timeout')
      this.posts[0].title = 'Changed!'
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    //console.log('Post', post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
