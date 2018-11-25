import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  likes : number = 0;
  dislikes : number = 0;
  @Input() title : string = 'Post title';
  @Input() content : string = 'Post content';
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
	if(this.likes > this.dislikes) return 1;
	else if(this.likes < this.dislikes) return -1;
	else return 0;
  }
}
