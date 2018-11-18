import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  likes : number = 0;
  dislikes : number = 0;
  title : string = 'Post title';
  content : string = 'Post content';
  createdAt = new Date();

  constructor() {
  }

  ngOnInit() {
  }
  
  addLike() {
	this.likes++;
  }
  
  addDislike() {
	this.dislikes++;
  }

  onLikeClick() {
	this.addLike();
  }
  
  onDislikeClick() {
	this.addDislike();
  }
  
  isPostLiked() {
	return this.likes >= this.dislikes;
  }
}
