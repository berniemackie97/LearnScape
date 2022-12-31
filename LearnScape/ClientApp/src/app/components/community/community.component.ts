import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
//  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  posts: any[] = [
    {
      title: 'Post 1',
      author: 'User 1',
      code: 'console.log("Hello, world!")',
      description: 'This is a test post.',
      date: new Date(),
      showComments: false,
      comments: [
        {
          text: 'Great post!',
          author: 'User 2',
          date: new Date()
        },
        {
          text: 'Thanks!',
          author: 'User 1',
          date: new Date()
        }
      ]
    },
    {
      title: 'Post 2',
      author: 'User 2',
      code: 'console.log("Hi, everyone!")',
      description: 'This is another test post.',
      date: new Date(),
      showComments: false,
      comments: [
        {
          text: 'Interesting code snippet!',
          author: 'User 3',
          date: new Date()
        }
      ]
    }
  ];
  searchTerm: string = '';
  newPostTitle: string = '';
  newPostCode: string = '';
  newPostDescription: string = '';
  newCommentText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    // Search for posts by keyword
  }

  addPost(): void {
    // Add a new post to the list
  }

  showComments(post: any): void {
    // Toggle the display of comments for a particular post
  }

  addComment(post: any): void {
    // Add a new comment to a particular post
  }
}
