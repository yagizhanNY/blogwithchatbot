import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article!: Article
  constructor(private articleService: ArticleService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const articleId = this.activatedRoute.snapshot.paramMap.get("id");
    this.article = this.articleService.getArticleById(Number(articleId!))
    console.log(this.article);
  }

}
