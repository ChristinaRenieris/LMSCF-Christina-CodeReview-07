import { Component, OnInit } from '@angular/core';
import { blogPosts } from '../blogPosts';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
blogPosts = blogPosts;

  constructor() { }

  ngOnInit(): void {
  }

}
