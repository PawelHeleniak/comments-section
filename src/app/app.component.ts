import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'comments-section';

  posts = [
    {
      title: 'Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Title 2',
      description:
        'Fusce iaculis odio eget nibh vestibulum, sit amet porta quam iaculis.',
    },
    {
      title: 'Title 3',
      description: 'Nulla vitae pretium dui, vitae porta sapien.',
    },
  ];

  addPost(post: any) {
    this.posts.push(post);
  }
}
