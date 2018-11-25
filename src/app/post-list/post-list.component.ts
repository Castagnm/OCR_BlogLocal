import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	posts = [
		{
			title : "Ceci est mon premier post",
			content : "Ceci est le contenu de mon premier post, dans lequel je n'ai pas grand chose à dire"
		},
		{
			title : "Ceci est mon deuxième post",
			content : "Ceci est le contenu de mon deuxième post, où je n'ai vraiment grand chose à dire"
		},
		{
			title : "Ceci est mon troisième post",
			content : "Ceci est le contenu de mon troisième post, et je vais m'arrêter là."
		}
	];

  constructor() { }

  ngOnInit() {
  }

}
